import { cn } from '@shared/lib';

export interface OptionItemData {
  id: string; 
  title: string;
  subTitle?: string; 
  description?: string;
  icon: React.ReactNode;
}

interface SelectableCardProps {
  option: OptionItemData;
  isSelected: boolean;
  onClick: () => void;
}

export function SelectableCard({
  option,
  isSelected,
  onClick,
}: SelectableCardProps) {
  const cardStyle = isSelected
    ? 'bg-active-item-background border-border-active-item'
    : 'bg-text-muted-foreground border-border';
  const titleColor = isSelected ? 'text-primary-active' : ' text-text-main';
  const subTitleColor = isSelected
    ? 'text-primary-hover'
    : ' text-text-tertiary';
  const descriptionColor = isSelected
    ? 'text-primary-hover'
    : ' text-text-foreground';

  return (
    <button
      type="button"
      role="radio"
      aria-checked={isSelected}
      onClick={onClick}
      className={cn(
        cardStyle,
        'flex items-center gap-2 rounded-lg border p-1 sm:p-2 md:p-3 cursor-pointer select-none',
      )}
    >
      <span className="w-7 h-7 sm:w-9 sm:h-9 md:h-11 md:w-11 flex items-center justify-center shrink-0">
        {option.icon}
      </span>
      <span className="flex flex-col items-start text-right">
        <span className="flex items-center gap-1 font-bold font-yekta">
          <span className={cn(titleColor, 'text-xs sm:text-sm md:text-base')}>
            {option.title}
          </span>
          {option.subTitle && (
            <span className={cn(subTitleColor, 'text-[0.625rem] sm:text-xs md:text-sm')}>
              {option.subTitle}
            </span>
          )}
        </span>
        {option.description && (
          <span
            className={cn(descriptionColor, 'font-medium text-[0.625rem] sm:text-xs md:text-sm font-yekta mt-1')}
          >
            {option.description}
          </span>
        )}
      </span>
    </button>
  );
}
