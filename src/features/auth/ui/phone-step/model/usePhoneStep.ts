import { useSendOtp } from '@features/auth/api';
import { useFormContext } from 'react-hook-form';
import { AuthFormType, getErrorMessage } from '@features/auth/lib';
import { useCallback } from 'react';

interface usePhoneStepParams {
  onSuccess: () => void;
}

export function usePhoneStep({ onSuccess }: usePhoneStepParams) {
  const {
    register,
    trigger,
    getValues,
    setError,
    formState: { errors },
  } = useFormContext<AuthFormType>();

  const phoneRegister = register('phone');
  const { mutateAsync, isPending } = useSendOtp();

  const handleSubmitPhone = useCallback(async () => {
    const isValid = await trigger('phone');
    if (!isValid) return;

    const phone = getValues('phone');

    try {
      await mutateAsync({ phoneNumber: phone });
      onSuccess();
    } catch (error: unknown) {
      setError('phone', {
        type: 'server',
        message: getErrorMessage(error, 'ارسال کد تایید با خطا مواجه شد.'),
      });
    }
  }, [getValues, mutateAsync, onSuccess, setError, trigger]);

  return {
    phoneRegister,
    phoneError: errors.phone?.message as string | undefined,
    isPending,
    handleSubmitPhone,
  };
}
