'use client';

import { useState } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@shared/ui/accordion';

import { faqCategories } from '../model/mock-faq';
import { cn } from '@shared/lib';
import { Button } from '@shared/ui';
import { MessageCircle } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

interface FaqSectionProps {
  onContactSupport?: () => void;
}

export function FaqSection({ onContactSupport }: FaqSectionProps) {
  const [activeCategoryId, setActiveCategoryId] = useState(faqCategories[0].id);
  const activeCategory =
    faqCategories.find((category) => category.id === activeCategoryId) ??
    faqCategories[0];

  return (
    <section dir="rtl" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      
      <header className="mx-auto max-w-2xl text-center">
        <div className="inline-flex flex-col items-center gap-2">
          <span className="text-sm font-medium text-slate-500">
            راهنمای سریع بومرو
          </span>
          <span className="h-1 w-8 rounded-full bg-[#151823]" />
        </div>
        <h1 className="mt-4 text-3xl font-extrabold leading-tight text-[#151823] sm:text-4xl">
          جواب سؤال‌ها اینجاست
        </h1>
        <p className="mt-4 text-[13px] leading-7 text-slate-500 sm:text-[15px]">
          پاسخ سؤال‌های پرتکرار درباره برنامه‌ریزی سفر، حساب کاربری و خدمات
          بومرو را پیدا کنید.
        </p>
      </header>

      <div className="mt-12 grid gap-8 lg:grid-cols-[280px_1fr] lg:items-start">
        <aside>
          {/* موبایل: چیپ‌های افقی قابل اسکرول */}
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 lg:hidden">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategoryId(category.id)}
                className={cn(
                  'shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                  category.id === activeCategoryId
                    ? 'border-blue-600 bg-blue-50 text-blue-600'
                    : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50',
                )}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* دسکتاپ: سایدبار عمودی */}
          <nav className="hidden lg:block">
            <h2 className="mb-3 px-4 text-sm font-bold text-[#151823]">
              دسته‌بندی‌ها
            </h2>
            <ul className="flex flex-col gap-1">
              {faqCategories.map((category) => (
                <li key={category.id}>
                  <button
                    type="button"
                    onClick={() => setActiveCategoryId(category.id)}
                    className={cn(
                      'w-full rounded-xl px-4 py-2.5 text-right text-sm transition-colors',
                      category.id === activeCategoryId
                        ? 'bg-blue-50 font-medium text-blue-600'
                        : 'text-slate-600 hover:bg-slate-50',
                    )}
                  >
                    {category.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <Accordion
          type="single"
          collapsible
          defaultValue={activeCategory.items[0]?.id}
          className="flex flex-col gap-3 text-gray-700"
        >
          {activeCategory.items.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl bg-blue-50 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-bold text-[#151823]">هنوز سؤالی داری؟</h3>
          <p className="mt-1 text-sm text-slate-500">
            اگر پاسخ موردنظرت را پیدا نکردی، تیم پشتیبانی بومرو راهنمایی‌ات
            می‌کند.
          </p>
        </div>
        <Button onClick={onContactSupport} className="shrink-0">
          <HugeiconsIcon icon={MessageCircle} className="h-4 w-4" />
          ارتباط با پشتیبانی
        </Button>
      </div>
    </section>
  );
}
