export type QuestionItem = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

export const questions: QuestionItem[] = [
  {
    id: 1,
    icon: "🌍",
    title: "مقصدت کجاست؟",
    description: "شهر یا کشوری که برای سفرت در نظر داری رو انتخاب کن.",
  },
  {
    id: 2,
    icon: "⏳",
    title: "چند روز قراره بمونی؟",
    description:
      "تاریخ رفت و برگشت و تعداد روزهای اقامتت رو مشخص کن، تا برنامه دقیقی برات چیده بشه.",
  },
  {
    id: 3,
    icon: "👥",
    title: "چند نفرید؟",
    description:
      "تعداد مسافران رو بگو (همسفرها می‌تونی خیلی راحت دوستات رو هم به این سفر اضافه کنی تا اون‌ها هم در جریان برنامه باشن).",
  },
  {
    id: 4,
    icon: "💰",
    title: "بودجت چقدره؟",
    description:
      "محدوده بودجت رو مشخص کن تا تورها و بهترین پیشنهادها رو دقیقاً متناسب با جیب خودت بهت ارائه بده.",
  },
];