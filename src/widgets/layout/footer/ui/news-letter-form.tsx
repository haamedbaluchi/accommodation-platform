import { TextField } from '@shared/ui';

export function NewsletterForm() {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-right">
      <h4 className="mb-3 text-lg font-black text-text-main">
        دوست داری از پیشنهادهای جذاب سفر باخبر بشی؟
      </h4>

      <form className="w-full max-w-105">
        <TextField
          label=" ایمیلت رو وارد کن."
          hiddenLabel={false}
          type="email"
          placeholder="example@gmail.com"
        />
      </form>
    </div>
  );
}
