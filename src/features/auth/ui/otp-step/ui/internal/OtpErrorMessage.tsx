interface OtpErrorMessageProps {
  message?: string;
}

export function OtpErrorMessage({ message }: OtpErrorMessageProps) {
  if (!message) return null;

  return (
    <span className="mt-5 font-yekta text-base font-bold text-error">
      {message}
    </span>
  );
}
