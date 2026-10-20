import { parseSseData } from "./parser";
import { AiStreamDoneEvent, AiStreamEvent } from "./stream-events.types";

export async function readSseStream(
  response: Response,
  onEvent?: (event: AiStreamEvent) => void,
) {
  if (!response.body) {
    throw new Error('ReadableStream is not supported');
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder('utf-8');

  let buffer = '';
  let finalEvent: AiStreamDoneEvent | null = null;

  while (true) {
    const { value, done } = await reader.read();

    if (done) {
      break;
    }

    // decode chunk safely
    buffer += decoder.decode(value, { stream: true });

    // process all complete SSE events in buffer
    while (true) {
      // support both LF and CRLF boundaries
      const doubleNewlineIndex = buffer.search(/\r?\n\r?\n/);

      if (doubleNewlineIndex === -1) break;

      const rawEvent = buffer.slice(0, doubleNewlineIndex);
      buffer = buffer.slice(
        doubleNewlineIndex + (buffer.includes('\r\n\r\n') ? 4 : 2),
      );

      const data = parseSseData(rawEvent);

      if (!data || data === '[DONE]') continue;

      let parsed: AiStreamEvent;

      try {
        parsed = JSON.parse(data);
      } catch (err) {
        console.error('SSE JSON parse error:', data);
        continue;
      }

      // emit event to UI
      onEvent?.(parsed);

      // capture final event
      if (parsed.type === 'done') {
        finalEvent = parsed;
      }

      // handle error
      if (parsed.type === 'error') {
        throw new Error(parsed.message || 'AI stream error');
      }
    }
  }

  // flush remaining buffer (VERY IMPORTANT)
  const remainingData = parseSseData(buffer);

  if (remainingData && remainingData !== '[DONE]') {
    try {
      const parsed = JSON.parse(remainingData) as AiStreamEvent;

      onEvent?.(parsed);

      if (parsed.type === 'done') {
        finalEvent = parsed;
      }

      if (parsed.type === 'error') {
        throw new Error(parsed.message || 'AI stream error');
      }
    } catch (err) {
      console.warn('Remaining SSE parse failed:', remainingData);
    }
  }

  if (!finalEvent) {
    throw new Error('AI stream finished without done event');
  }

  return finalEvent;
}