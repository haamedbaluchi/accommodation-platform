import { cn } from '@shared/lib';
import { CheckIcon } from '@heroicons/react/24/solid';

interface StepItem {
  id: string;
  title: string;
  description: string;
}

const colorStyle = {
  active: {
    icon: 'border-primary bg-blue-50 text-primary-hover',
    title: 'text-primary-hover',
    description: 'text-primary',
    mobileDot: 'bg-primary',
    mobileLine: 'bg-gray-200',
  },
  completed: {
    icon: 'border-primary bg-primary text-background',
    title: 'text-primary-active',
    description: 'text-primary-hover',
    mobileDot: 'bg-primary ring-2 ring-primary/30',
    mobileLine: 'bg-primary/40',
  },
  inactive: {
    icon: 'border-secondary bg-background text-text-secondary',
    title: 'text-text-secondary',
    description: 'text-text-muted',
    mobileDot: 'bg-gray-200 border-gray-200',
    mobileLine: 'bg-gray-200',
  },
};

interface StepperProps {
  currentStep: number;
  steps: StepItem[];
}

export function Stepper({ currentStep, steps }: StepperProps) {
  return (
    <aside className="w-full bg-white block">
      <div className="flex flex-col md:flex-row flex-1 gap-2 md:gap-0 lg:gap-4 px-4 md:px-1">
        {steps.map((step, index) => {
          const isActive = currentStep === index;
          const isCompleted = currentStep > index;
          const isLast = index === steps.length - 1;

          const style =
            colorStyle[
              isActive ? 'active' : isCompleted ? 'completed' : 'inactive'
            ];

          return (
            <div
              key={step.id}
              aria-current={isActive ? 'step' : undefined}
              className="relative z-10 flex items-start gap-2 md:gap-1 xl:gap-4"
            >
              <div
                className={cn(
                  'hidden xs:flex shrink-0 w-8 h-8 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-12 xl:h-12 rounded-full items-center justify-center border-2 transition-colors duration-300',
                  style.icon,
                )}
              >
                {isCompleted ? (
                  <CheckIcon className="w-6 h-6" />
                ) : (
                  <span className="font-medium text-sm font-yekta">
                    {index + 1}
                  </span>
                )}
              </div>

              <div className="relative flex xs:hidden w-6 shrink-0 justify-center">
                <div
                  className={cn(
                    'relative z-10 mt-1 h-3.5 w-3.5 rounded-full',
                    style.mobileDot,
                    isActive && 'ring-1 ring-primary ring-offset-1',
                  )}
                />

                {!isLast && (
                  <div
                    className={cn(
                      'absolute top-5 -bottom-5 w-px h-10',
                      style.mobileLine,
                    )}
                  />
                )}
              </div>

              <div className="mt-0 sm:mt-1">
                <p
                  className={cn(
                    'text-sm sm:text-base md:text-sm lg:text-base font-semibold',
                    style.title,
                  )}
                >
                  {step.title}
                </p>
                <p
                  className={cn(
                    'text-xs sm:text-sm md:text-xs lg:text-sm mt-1',
                    style.description,
                  )}
                >
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
