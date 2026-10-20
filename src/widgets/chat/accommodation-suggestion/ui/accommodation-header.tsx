// type AccommodationHeaderProps = {
//   title: string;
//   location: string;
//   score?: number;
//   scoreLabel?: string;
//   price?: string;
//   pricePeriod?: string;
// };

// export function AccommodationHeader({
//   title,
//   location,
//   score,
//   scoreLabel,
//   price,
//   pricePeriod = "هر شب",
// }: AccommodationHeaderProps) {
//   return (
//     <div className="flex flex-col gap-2 w-full">
//       <div className="flex items-start justify-between gap-3">
//         <div className="min-w-0 flex-1">
//           <h2 className="text-[17px] font-extrabold leading-8 text-neutral-900 sm:text-[19px] lg:text-[22px]">
//             {title}
//           </h2>
//           <p className="mt-1 text-[12px] leading-6 text-neutral-500 sm:text-[13px]">
//             {location}
//           </p>
//         </div>

//         {/* بخش قیمت طبق تصویر */}
//         {price && (
//           <div className="flex flex-col items-end shrink-0">
//             <div className="flex items-center gap-1">
//               <span className="text-[18px] font-black text-neutral-900 md:text-[20px]">{price}</span>
//               <span className="text-[12px] font-medium text-neutral-500">تومان</span>
//             </div>
//             <span className="text-[11px] text-neutral-400">{pricePeriod}</span>
//           </div>
//         )}
//       </div>

//       {/* بخش امتیاز */}
//       {typeof score === 'number' && (
//         <div className="flex items-center gap-2 mt-1">
//           <div className="flex items-center justify-center rounded-lg bg-blue-50 px-2 py-1 text-blue-700">
//             <span className="text-[13px] font-bold">{score.toFixed(1)}</span>
//           </div>
//           {scoreLabel && (
//             <span className="text-[12px] font-semibold text-blue-600/80">
//               {scoreLabel}
//             </span>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }
type AccommodationHeaderProps = {
  title: string;
  location: string;
  score?: number;
  scoreLabel?: string;
  price?: string;
  pricePeriod?: string;
};

export function AccommodationHeader({
  title,
  location,
  score,
  scoreLabel,
  price,
  pricePeriod = 'هر شب',
}: AccommodationHeaderProps) {
  return (
    <div className="flex w-full min-w-0 flex-col gap-2">
      <div className="flex min-w-0 items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h2 className="text-[17px] font-extrabold leading-8 text-neutral-900 sm:text-[19px] lg:text-[22px]">
            {title}
          </h2>

          <p className="mt-1 line-clamp-2 text-[12px] leading-6 text-neutral-500 sm:text-[13px]">
            {location}
          </p>
        </div>

        {price && (
          <div className="flex shrink-0 flex-col items-end">
            <div className="flex items-center gap-1">
              <span className="text-[18px] font-black text-neutral-900 md:text-[20px]">
                {price}
              </span>

              <span className="text-[12px] font-medium text-neutral-500">
                تومان
              </span>
            </div>

            <span className="text-[11px] text-neutral-400">
              {pricePeriod}
            </span>
          </div>
        )}
      </div>

      {typeof score === 'number' && (
        <div className="mt-1 flex items-center gap-2">
          <div className="flex items-center justify-center rounded-lg bg-blue-50 px-2 py-1 text-blue-700">
            <span className="text-[13px] font-bold">
              {score.toFixed(1)}
            </span>
          </div>

          {scoreLabel && (
            <span className="text-[12px] font-semibold text-blue-600/80">
              {scoreLabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
