type IconProps = {
  className?: string;
};

export function EditIcon({
  className,
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M14.7 5.3 18.7 9.3M4 20h4.2L19.4 8.8a2.8 2.8 0 0 0-4-4L4.2 16A.7.7 0 0 0 4 16.5V20Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}