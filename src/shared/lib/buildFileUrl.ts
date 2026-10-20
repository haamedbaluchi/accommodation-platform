interface BuildFileUrlOptions {
  baseUrl?: string;
}

export function buildFileUrl(
  path?: string | null,
  options?: BuildFileUrlOptions,
) {
  if (!path) return undefined;

  const baseUrl =
    options?.baseUrl ?? process.env.NEXT_PUBLIC_BACKEND_URL;

  if (!baseUrl) return undefined;

  if (/^https?:\/\//.test(path)) {
    return path;
  }

  return `${baseUrl}${path}`;
}