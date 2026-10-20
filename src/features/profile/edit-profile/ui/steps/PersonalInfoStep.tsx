'use client';

import { useFormContext } from 'react-hook-form';
import { EditProfileFormValues } from '../../model';
import { RHFTextField ,RHFTextArea} from '@shared/ui';

export function PersonalInfoStep() {
  const { control } = useFormContext<EditProfileFormValues>();

  return (
    <div className="space-y-2 sm:space-y-4 md:space-y-6">
      <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-5">
        <RHFTextField
          control={control}
          name="name"
          label="نام"
          placeholder="مثلاً: محمد"
        />

        <RHFTextField
          control={control}
          name="family_name"
          label="نام خانوادگی"
          placeholder="مثلاً: احمدی"
        />

        <RHFTextField
          control={control}
          name="username"
          label="نام کاربری"
          placeholder="مثلاً: moh_ahmadi"
        />

        <RHFTextField
          control={control}
          name="social_media_link"
          label="لینک شبکه اجتماعی"
          placeholder="مثلاً:@mohammad"
        />
        <RHFTextField
          control={control}
          name="city"
          label="مبدأ سفرها"
          placeholder="مثلاً: اصفهان"
        />
        <RHFTextField
          control={control}
          name="email"
          label="ایمیل"
          placeholder="مثلاً: example@gmail.com"
        />
      </div>

      <RHFTextArea
        control={control}
        name="about"
        label="درباره من"
        placeholder="مثلاً: عاشق سفرهای جاده‌ای، کشف کافه‌های محلی و عکاسی از طبیعت هستم..."
      />
    </div>
  );
}
