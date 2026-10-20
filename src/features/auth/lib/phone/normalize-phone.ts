import { toEnglishDigits } from "./to-english-digits";

export const normalizePhone = (value: string) => {
  const phone = toEnglishDigits(value).replace(/\s|-/g, '');

  if (phone.startsWith('+98')) return phone.slice(3);
  if (phone.startsWith('98')) return phone.slice(2);
  if (phone.startsWith('0')) return phone.slice(1);

  return phone;
};