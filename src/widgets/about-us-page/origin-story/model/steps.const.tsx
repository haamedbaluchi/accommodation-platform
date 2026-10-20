import type { StoryStep } from "./types";

import ideaImg from  "/public/images/planet.png";
import productImg from "/public/images/rocket.png";
import growthImg from "/public/images/team.png" ;

export const ORIGIN_STEPS: readonly StoryStep[] = [
  {
    id: "idea-start",
    order: 1,
    title: "شروع ایده",
    description: "با هدف ساده کردن برنامه‌ریزی سفر",
    image: ideaImg,
    circleClassName: "bg-emerald-100/80",
  },
  {
    id: "product-build",
    order: 2,
    title: "ساخت محصول",
    description: "طراحی و توسعه بومو برای تجربه بهتر سفر",
    image: productImg,
    circleClassName: "bg-rose-100/70",
  },
  {
    id: "community-growth",
    order: 3,
    title: "رشد جامعه کاربران",
    description: "همراهی با هزاران مسافر در سراسر ایران",
    image: growthImg,
    circleClassName: "bg-amber-100/70",
  },
] as const;

export const ORIGIN_COPY = {
  heading: "بومو از کجا شروع شد؟",
  subtitle: "از یک ایده کوچک تا ساختن همراهی هزاران نفر",
} as const;