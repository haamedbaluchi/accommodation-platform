'use client';

import { Button } from '@shared/ui';
import { useRouter } from 'next/navigation';
import { useWizardNavigation } from '../lib/useWizardNavigation';

interface WizardFooterProps {
  onSubmit: () => void;
  isLoading:boolean
}

export function WizardFooter({ onSubmit,isLoading }: WizardFooterProps) {
  const { isFirstStep, isLastStep, isSubmitting, handleNext, previousStep } =
    useWizardNavigation();
  const router = useRouter();

  return (
    <div className="mt-4 sm:mt-7 md:mt-10 pt-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          {!isFirstStep && (
            <Button type="button" variant="outline" onClick={previousStep}>
              مرحله قبل
            </Button>
          )}
        </div>

        <div className="flex gap-3">
          <Button
            type="button"
            rounded="full"
            variant="tertiary"
            className="px-5 lg:px-5 bg-[#FFF0DB]"
            onClick={() => router.push('/profile')}
          >
            انصراف
          </Button>

          {isLastStep ? (
            <Button type="button" onClick={handleNext}>
              ادامه
            </Button>
          ) : (
            <Button
              type="button"
              rounded="full"
              className="px-8 lg:px-8"
              //   loading={isSubmitting}
              disabled={isSubmitting}
              onClick={onSubmit}
            >
              ذخیره تغییرات
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
