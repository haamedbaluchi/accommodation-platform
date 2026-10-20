import { cn } from '@shared/lib';
import { useOtpInput } from '../../model/useOtpInput';

interface OtpInputsProps {
  length?: number;
  value: string;
  onChange: (value: string) => void;
  onComplete: (otp: string) => void;
  status: 'success' | 'error' | 'default';
}

export function OtpInputs({
  length = 5,
  value,
  onChange,
  onComplete,
  status = 'default',
}: OtpInputsProps) {
  const { inputRefs, handleChange, handleKeyDown, handlePaste, otp } =
    useOtpInput({
      length,
      value,
      onChange,
      onComplete,
    });

  const styleOPT =
    otp.every((digit) => digit !== '') && status !== 'default'
      ? status === 'success'
        ? 'bg-success/10 hover:bg-success/15 text-success focus:ring-success'
        : 'bg-error/10 hover:bg-error/15 text-error focus:ring-error'
      : 'bg-text-muted-foreground hover:bg-accent focus:ring-blue-500';

  return (
    <div className="flex items-center gap-3" dir="ltr">
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          ref={(el) => {
            if (el) inputRefs.current[index] = el;
          }}
          inputMode="numeric"
          maxLength={1}
          value={digit}
          placeholder="--"
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className={cn(
            'w-12 h-12 text-center text-2xl font-bold text-text-main  rounded-xl focus:ring-2 focus:outline-none placeholder:text-text-foreground/70 transition-all duration-200 [caret-height:2px]',
            styleOPT,
          )}
          aria-label={`رقم ${index + 1}`}
        />
      ))}
    </div>
  );
}
