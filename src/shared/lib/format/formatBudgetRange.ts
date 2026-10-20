
export function formatBudgetRange(
  range: [number, number],
  unit: string = 'میلیون',
): string {
  const [min, max] = range;
  return `${min} ${unit} تا ${max} ${unit}`;
}