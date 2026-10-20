import Image from 'next/image';
import { Button, Chip, TextField } from '@shared/ui';
import type { UseFormRegisterReturn } from 'react-hook-form';
import { GoogleIcon, IranFlagIcon } from '@shared/assets/icons';

interface PhoneStepViewProps {
  phoneRegister: UseFormRegisterReturn;
  phoneError?: string;
  isPending: boolean;
  onSubmitPhone: () => void;
}

export function PhoneStepView({
  phoneRegister,
  phoneError,
  isPending,
  onSubmitPhone,
}: PhoneStepViewProps) {
  return (
    <div className="h-full max-h-full overflow-y-auto rounded-t-3xl bg-background py-7 px-6 sm:px-8 md:px-12 custom-scrollbar">
      <div className="mx-auto flex w-full max-w-132 flex-col mt-0 md:mt-9">
        <div className="flex flex-col gap-2 font-yekta text-text-main">
          <Image
            src="/images/login_trip.svg"
            alt="ورود یا ثبت نام"
            width={48}
            height={48}
          />

          <h3 className="text-lg font-bold sm:text-xl md:text-3xl">
            سفرت رو از اینجا شروع کن!
          </h3>

          <p className="text-sm font-bold text-text-foreground sm:text-base md:text-xl">
            فقط کافیه شماره موبایلت رو وارد کنی تا وارد بومرو بشی یا ثبت‌نام
            کنی.
          </p>
        </div>

        <div className="mt-7 mb-9 2xl:mb-12 flex w-full flex-col gap-5">
          <div className="flex items-start gap-2">
            <TextField
              label="شماره تلفن"
              hiddenLabel
              placeholder="09123456789"
              inputMode="numeric"
              maxLength={11}
              errorMessage={phoneError}
              name={phoneRegister.name}
              ref={phoneRegister.ref}
              onBlur={phoneRegister.onBlur}
              onChange={(e) => {
                e.target.value = e.target.value
                  .replace(/[^0-9]/g, '')
                  .slice(0, 11);

                phoneRegister.onChange(e);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  onSubmitPhone();
                }
              }}
            />

            <Chip className="bg-text-muted-foreground shrink-0">
              <span className="font-yekta text-sm font-bold text-text-main">
                +98
              </span>
              <IranFlagIcon className="h-4 w-4" />
            </Chip>
          </div>

          <Button
            rounded="full"
            size="large"
            onClick={onSubmitPhone}
            disabled={isPending}
          >
            {isPending ? 'ارسال...' : 'ارسال کد تایید'}
          </Button>

          <div className="my-0 flex items-center gap-2 text-text-foreground md:my-0">
            <span className="inline-flex h-px flex-1 bg-accent" />
            <span>یا</span>
            <span className="inline-flex h-px flex-1 bg-accent" />
          </div>

          <Button
            rounded="full"
            size="large"
            variant="outline"
            className="border-tertiary-hover text-tertiary-hover hover:border-tertiary-active hover:bg-tertiary/5 hover:text-tertiary-active active:border-text-tertiary-active active:bg-tertiary/15 active:text-tertiary-active"
            rightIcon={<GoogleIcon className="w-6 h-6" />}
          >
            ورود با حساب گوگل
          </Button>
        </div>

        <p className="text-center text-xs font-normal text-text-foreground">
          با ادامه دادن، شما با <span className="underline">قوانین و مقررات</span>{' '}
          و <span className="underline">حریم خصوصی</span>{' '}
          <span className="text-primary">بومرو</span> موافقت می‌کنید.
        </p>
      </div>
    </div>
  );
}
