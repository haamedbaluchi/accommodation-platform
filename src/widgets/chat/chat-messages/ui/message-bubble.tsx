'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { cn } from '@shared/lib';
import { Loader } from '@shared/ui';

import { HomeModernIcon, UserGroupIcon } from '@heroicons/react/24/solid';

import { useAuthStore } from '@features/auth';
import { useTripDraftStore } from '@entities/trip/trip-draft';

import { AccommodationCard } from '@widgets/chat/accommodation-suggestion';

import {
  buildShabReservationUrl,
  type ChatSuggestedHotel,
  type AssistantMessage,
} from '@entities/chat';

// function convertTabSeparatedToMarkdownTable(text: string) {
//   const lines = text
//     .split('\n')
//     .map((line) => line.trim())
//     .filter(Boolean);

//   if (lines.length < 2) return text;

//   const firstRow = lines[0];

//   if (!firstRow.includes('\t')) return text;

//   const rows = lines.map((line) => line.split('\t'));

//   const header = rows[0];

//   const separator = header.map(() => '---');

//   return [
//     `| ${header.join(' | ')} |`,
//     `| ${separator.join(' | ')} |`,
//     ...rows
//       .slice(1)
//       .map((row) => `| ${row.join(' | ')} |`),
//   ].join('\n');
// }

function MarkdownRenderer({ text }: { text: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        // # عنوان
        h1: ({ children }) => (
          <h1 className="my-2 text-2xl font-extrabold leading-10 text-text-main md:text-3xl">
            {children}
          </h1>
        ),

        // ## عنوان
        h2: ({ children }) => (
          <h2 className="my-2 text-xl font-bold leading-9 text-text-main md:text-2xl">
            {children}
          </h2>
        ),

        // ### عنوان
        h3: ({ children }) => (
          <h3 className="my-1 text-lg font-bold leading-8 text-text-main md:text-xl">
            {children}
          </h3>
        ),

        p: ({ children }) => (
          <p className="my-1 leading-8">
            {children}
          </p>
        ),

        strong: ({ children }) => (
          <strong className="font-bold text-text-main md:font-extrabold">
            {children}
          </strong>
        ),

        ul: ({ children }) => (
          <ul className="box-border flex flex-col gap-4 list-disc pr-6">
            {children}
          </ul>
        ),

        ol: ({ children }) => (
          <ol className="my-0 list-decimal space-y-3 pr-6 marker:font-bold">
            {children}
          </ol>
        ),

        li: ({ children }) => (
          <li className="leading-8 [&>p]:inline [&>p]:m-0">
            {children}
          </li>
        ),

        table: ({ children }) => (
          <div className="my-6">
            <div className="overflow-x-auto">
              <div className="mx-auto w-fit overflow-hidden rounded-2xl border border-border shadow-sm">
                <table className="min-w-max">
                  {children}
                </table>
              </div>
            </div>
          </div>
        ),

        thead: ({ children }) => (
          <thead className="bg-primary text-white">
            {children}
          </thead>
        ),

        th: ({ children }) => (
          <th className="px-5 py-4 text-right font-bold">
            {children}
          </th>
        ),

        td: ({ children }) => (
          <td className="border-t px-5 py-4">
            {children}
          </td>
        ),

        tbody: ({ children }) => (
          <tbody className="[&_tr:nth-child(even)]:bg-gray-50">
            {children}
          </tbody>
        ),
      }}
    >
      {text}
    </ReactMarkdown>
  );
}

interface MessageBubbleProps {
  message: AssistantMessage;
  isUser: boolean;
}

export function MessageBubble({
  message,
  isUser,
}: MessageBubbleProps) {
  const user = useAuthStore((state) => state.user);

  const startDate = useTripDraftStore(
    (state) => state.startDate,
  );

  const endDate = useTripDraftStore(
    (state) => state.endDate,
  );

  const travelerCount = useTripDraftStore(
    (state) => state.travelerCount,
  );

  const hotels = (
    message.aiData?.researchData?.hotels ?? []
  ) as unknown as ChatSuggestedHotel[];

  const text = message.content ?? '';

  const isStreaming = message.isLoading;

  if (isStreaming && !text) {
    return (
      <div
        className={cn(
          'rounded-l-3xl rounded-tr-3xl px-4 py-2 text-sm leading-7 text-text-main font-yekta md:text-base lg:text-lg',
          'bg-transparent',
        )}
      >
        <div className="flex w-full items-center justify-start gap-3">
          <Loader size={8} />

          {message.streamLabel && (
            <span className="text-text-secondary">
              {message.streamLabel}
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'rounded-l-3xl rounded-tr-3xl px-4 text-sm leading-7 text-text-main font-yekta md:text-base lg:text-lg',
        'whitespace-pre-wrap wrap-break-words',
        isUser
          ? 'rounded-br-none bg-accent py-1 shadow-sm sm:py-2'
          : 'bg-transparent',
      )}
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-4 px-2 lg:gap-6">
          {message.isLoading ? (
            <div className="leading-8 wrap-break-words whitespace-pre-wrap">
              {text}
            </div>
          ) : (
            <MarkdownRenderer
              text={text}
            />
          )}

          {message.isLoading && (
            <div className="mt-2 flex items-center gap-2">
              <Loader size={6} />

              {message.streamLabel && (
                <span className="text-xs text-text-secondary">
                  {message.streamLabel}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {hotels.length > 0 && (
        <div className="mt-4 flex flex-col gap-6">
          <h3 className="px-4 text-lg font-bold">
            اقامتگاه‌های پیشنهادی:
          </h3>

          {hotels.map((hotel) => {
            const hotelId = String(
              hotel.provider_id ?? hotel.id ?? '',
            );

            const shabUrl = buildShabReservationUrl({
              houseId: hotelId,
              checkin: startDate,
              checkout: endDate,
              guestsCount: travelerCount,
              name: user?.name,
              family: user?.family_name,
              mobile: '',
              utmContent: 'chat_ai_accommodation_card',
            });

            const priceValue =
              hotel.nightly_rate_discounted ??
              hotel.nightly_rate;

            const formattedPrice = priceValue
              ? (priceValue / 10).toLocaleString('fa-IR')
              : 'نامشخص';

            const hotelImages =
              hotel.image_urls?.map((url: string) => ({
                src: url,
                alt: hotel.name ?? 'تصویر اقامتگاه',
              })) ?? [];

            return (
              <AccommodationCard
                key={hotelId}
                id={hotelId}
                title={hotel.name ?? 'بدون نام'}
                location={
                  hotel.location ?? 'موقعیت نامشخص'
                }
                score={hotel.star_rating}
                scoreLabel={
                  hotel.review_count
                    ? `${hotel.review_count} نظر`
                    : 'جدید'
                }
                description={hotel.description ?? ''}
                images={hotelImages}
                amenities={[
                  {
                    id: 'capacity',
                    label: hotel.capacity
                      ? `${hotel.capacity} نفره`
                      : 'ظرفیت نامشخص',
                    icon: (
                      <UserGroupIcon className="size-5" />
                    ),
                  },
                  {
                    id: 'rooms',
                    label: hotel.rooms
                      ? `${hotel.rooms} اتاق`
                      : 'تعداد اتاق نامشخص',
                    icon: (
                      <HomeModernIcon className="size-5" />
                    ),
                  },
                ]}
                detailsHref={shabUrl}
                reserveHref={shabUrl}
                price={formattedPrice}
                pricePeriod="تومان / هر شب"
              />
            );
          })}
        </div>
      )}
    </div>
  );
}