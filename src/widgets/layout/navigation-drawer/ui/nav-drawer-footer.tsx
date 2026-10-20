export function NavDrawerFooter() {
  return (
    <div className="mt-auto px-4 pb-5 pt-4">
      <div className="flex items-center justify-between px-1 font-medium text-[11px] md:text-sm 2xl:text-base text-text-foreground">
        <button
          type="button"
          className="transition hover:text-neutral-600"
        >
          حریم خصوصی
        </button>

        <button
          type="button"
          className="transition hover:text-neutral-600"
        >
          قوانین و مقررات بومو
        </button>
      </div>

      <div className="mt-2 font-medium text-[11px] md:text-sm 2xl:text-base text-text-foreground">
        ۱۴۰۵ © بومو
      </div>
    </div>
  );
}