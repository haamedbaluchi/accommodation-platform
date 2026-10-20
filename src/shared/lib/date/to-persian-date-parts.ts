export function toPersianDateParts(isoDate: string) {
  const [year, month, day] = isoDate.split('-').map(Number);

  const date = new Date(year, month - 1, day);

  const formatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
    day: 'numeric',
    month: 'long',
    weekday: 'long',
  });

  const parts = formatter.formatToParts(date);

  return {
    day: parts.find((part) => part.type === 'day')?.value ?? '',
    month: parts.find((part) => part.type === 'month')?.value ?? '',
    weekday: parts.find((part) => part.type === 'weekday')?.value ?? '',
  };
}