# 🏨 پلتفرم اقامتگاهی و گردشگری

یک وب‌اپلیکیشن رزرواسیون و گردشگری مدرن و مقیاس‌پذیر که با **Next.js 15**، **React 19** و **TypeScript** پیاده‌سازی شده و از متدولوژی معماری **Feature-Sliced Design (FSD)** پیروی می‌کند[cite: 1, 10].

---

### ✨ ویژگی‌ها و قابلیت‌های کلیدی

* **معماری ماژولار و تمیز (FSD):** ساختاردهی دقیق لایه‌ها بر پایه معماری Feature-Sliced Design (`shared`، `entities`، `features`، `widgets` و `views`) جهت ماژولار بودن، نگهداری آسان و تفکیک دغدغه‌ها[cite: 1].
* **نقشه و موقعیت مکانی تعاملی:** یکپارچه‌سازی نقشه تعاملی با استفاده از **Leaflet** و SDK اختصاصی **پلتفرم نقشه نشان** برای جستجوی اقامتگاه‌ها و مکان‌یابی[cite: 10].
* **پشتیبانی کامل از تاریخ و تقویم شمسی:** مدیریت زمان‌بندی و رزرو با تقویم بومی جلالی با استفاده از `date-fns-jalali` و `@daypicker/persian`[cite: 10].
* **فرم‌های Type-Safe با عملکرد بالا:** مدیریت بهینه و بدون رندر اضافی فرم‌ها به کمک **React Hook Form** به همراه اعتبارسنجی دقیق داده‌ها در زمان اجرا توسط اسکیمای **Valibot**[cite: 10].
* **تحلیل و نمایش آماری داده‌ها:** ساخت نمودارهای آماری تعاملی و گزارش‌گیری عددی با استفاده از **Recharts**[cite: 10].
* **رابط کاربری در دسترس و روان (Accessible UI):** کامپوننت‌های پایه Headless بر بستر **Radix UI**، استایل‌دهی با **Tailwind CSS v4** و انیمیشن‌های نرم با **Framer Motion**[cite: 10].
* **زیرساخت داکر و آماده‌سازی پروداکشن:** بیلد چندمرحله‌ای (Multi-stage) بهینه با حالت `standalone` در Next.js و تنظیم ریورس پروکسی (Rewrite) برای اتصال امن به API بک‌اند[cite: 4, 5, 8].

---

### 🛠️ استک و ابزارهای کلیدی

* **هسته اصلی (Core):** Next.js 15 (App Router), React 19, TypeScript[cite: 10]
* **مدیریت وضعیت (State Management):**
  * وضعیت سرور: `@tanstack/react-query` (مدیریت کش، همگام‌سازی و بروزرسانی پس‌زمینه)[cite: 10]
  * وضعیت کلاینت: `zustand` (مدیریت استیت سراسری و سبک)[cite: 10]
* **فرم و اعتبارسنجی:** `react-hook-form`, `valibot`, `@hookform/resolvers`[cite: 10]
* **نقشه و جغرافیا:** `leaflet`, `@neshan-maps-platform/leaflet`[cite: 10]
* **استایل و UI:** `tailwindcss` (v4), `@radix-ui/*`, `framer-motion`, `sonner` (سیستم اعلان‌ها), `embla-carousel-react`[cite: 10]
* **تاریخ و بومی‌سازی:** `date-fns`, `date-fns-jalali`, `react-day-picker`, `@daypicker/persian`[cite: 10]
* **زیرساخت و استقرار:** Docker, Docker Compose, Next.js Rewrites Proxy[cite: 4, 5, 8]






This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
