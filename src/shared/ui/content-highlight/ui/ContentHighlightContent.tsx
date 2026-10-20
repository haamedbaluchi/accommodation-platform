import { ContentHighlightContentProps } from "../model";

export function ContentHighlightContent({
  title,
  description,
  children,
}: ContentHighlightContentProps) {
  return (
    <div className="flex w-full flex-col gap-1 sm:gap-2 text-start font-yekta md:w-1/2">
      <h2 className="max-w-123.25 text-lg sm:text-2xl font-black text-text-main md:text-3xl">
        {title}
      </h2>

      <p className="max-w-123.25 text-sm sm:text-lg font-medium leading-relaxed text-text-foreground md:text-xl">
        {description}
      </p>

      {children}
    </div>
  );
}
