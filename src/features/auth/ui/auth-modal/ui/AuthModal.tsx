'use client';

import { Drawer } from '@shared/ui';
import { AuthFlow } from './AuthFlow';
import { FormProvider, useForm } from 'react-hook-form';
import { authSchema ,AuthFormType} from '@features/auth/lib';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { DEFAULT_AUTH_FORM_VALUES } from '@features/auth/model';

interface AuthModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function AuthModal({ open, setOpen }: AuthModalProps) {
  const form = useForm<AuthFormType>({
    resolver: valibotResolver(authSchema),
    mode: 'onSubmit',
    defaultValues: DEFAULT_AUTH_FORM_VALUES,
  });

  return (
    <FormProvider {...form}>
      <Drawer
        side="bottom"
        open={open}
        description='ورود یا ثبت نام'
        onOpenChange={setOpen}
        title="ورود یا ثبت نام"
        className="bottom-0 h-156 max-h-[70%] w-full overflow-hidden rounded-t-3xl shadow-[-8px_10px_16px_0px_#00000012] md:w-[80%] lg:w-[60%] max-w-300"
      >
        <form className="h-full" onSubmit={(e) => e.preventDefault()}>
          <AuthFlow open={open} setOpen={setOpen} form={form} />
        </form>
      </Drawer>
    </FormProvider>
  );
}
