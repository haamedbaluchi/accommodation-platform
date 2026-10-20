export function getGroupLabel(isoDate: string): string {
  const diffDays = Math.floor((Date.now() - new Date(isoDate).getTime()) / 86_400_000);
  if (diffDays < 1) return 'امروز';
  if (diffDays === 1) return 'دیروز';
  if (diffDays < 7) return 'این هفته';
  if (diffDays < 14) return 'یک هفته پیش';
 
  return new Intl.DateTimeFormat('fa-IR', { year: 'numeric', month: 'long' }).format(
    new Date(isoDate),
  );
}