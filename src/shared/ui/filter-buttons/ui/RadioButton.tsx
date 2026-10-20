import { cn } from '@shared/lib';
import { RadioButtonProps } from '../model/filter.button.types';


export function RadioButton<T extends string>({
  option,
  index,
  isActive,
  onSelect,
  onKeyDown,
  setButtonRef,
  buttonClassName,
  activeButtonClassName,
  inactiveButtonClassName,
}: RadioButtonProps<T>) {
  const isDisabled = Boolean(option.disabled);

  return (
    <button
      ref={setButtonRef(index)}
      type="button"
      role="radio"
      aria-checked={isActive}
      disabled={isDisabled}
      tabIndex={isActive && !isDisabled ? 0 : -1}
      onClick={() => {
        if (!isActive && !isDisabled) {
          onSelect(option.value);
        }
      }}
      onKeyDown={(event) => onKeyDown(event, option)}
      className={cn(
        'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
        buttonClassName,
        isActive ? activeButtonClassName : inactiveButtonClassName,
      )}
    >
      {option.label}
    </button>
  );
}
