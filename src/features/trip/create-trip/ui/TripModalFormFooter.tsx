import { cn } from '@shared/lib';
import { Button, Tooltip } from '@shared/ui';
import { useFormContext } from 'react-hook-form';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

interface TripModalFormFooterProps {
  currentStep: number;
  isLastStep: boolean;
  onNext: () => void;
  onNextWV: () => void;
  onPrev: () => void;
  isPending?: boolean;
}

export function TripModalFormFooter({
  currentStep,
  isLastStep,
  onNext,
  onNextWV,
  onPrev,
  isPending,
}: TripModalFormFooterProps) {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  const isLoading = isSubmitting || isPending;

  return (
    <div
      className={cn(
        'flex items-center w-full gap-3',
        currentStep > 0 ? 'justify-between' : 'justify-end',
      )}
    >
      {currentStep > 0 && (
        <Tooltip content="مرحله قبل">
          <Button
            variant="outline"
            type="button"
            aria-label="مرحله قبل"
            rounded="full"
            size="icon"
            onClick={onPrev}
            disabled={isLoading}
          >
            <ArrowRightIcon className="w-5 h-5" />
          </Button>
        </Tooltip>
      )}

      <div>
        {isLastStep ? (
          <Button
            type="submit"
            form="trip-builder-form"
            rounded="full"
            disabled={isLoading}
            className="px-3"
          >
            {isLoading ? 'در حال ثبت...' : 'ثبت نهایی سفر'}
          </Button>
        ) : (
          <div className="flex items-center gap-1 md:gap-3">
            <Button
              type="button"
              rounded="full"
              size="medium"
              variant="tertiary"
              onClick={onNextWV}
              disabled={isLoading}
            >
              <span className="hidden md:inline-flex">
                برام مهم نیست، رد شو
              </span>
              <span className="inline-flex md:hidden">مهم نیست فعلا</span>
            </Button>

            <Button
              type="button"
              rounded="full"
              size="medium"
              onClick={onNext}
              disabled={isLoading}
              leftIcon={<ArrowLeftIcon className="w-3 h-3 md:w-4 md:h-4" />}
            >
              مرحله بعد
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
