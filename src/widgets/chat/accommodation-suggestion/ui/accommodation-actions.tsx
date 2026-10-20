import Link from 'next/link';

type AccommodationActionsProps = {
  detailsHref?: string;
  reserveHref?: string;
};

export function AccommodationActions({
  detailsHref = '#',
  reserveHref = '#',
}: AccommodationActionsProps) {
  return (
    <div className="grid grid-cols-2 gap-3 mt-2">
      <Link
        href={reserveHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-12 items-center justify-center rounded-2xl bg-blue-600 text-[13px] font-bold text-white transition hover:bg-blue-700 lg:text-[15px] shadow-md shadow-blue-100"
      >
        انتخاب این اقامتگاه
      </Link>
      <Link
        href={detailsHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-12 items-center justify-center rounded-2xl border border-amber-200 bg-amber-50/50 text-[13px] font-bold text-amber-800 transition hover:bg-amber-100 lg:text-[15px]"
      >
        مشاهده جزئیات
      </Link>
    </div>
  );
}
