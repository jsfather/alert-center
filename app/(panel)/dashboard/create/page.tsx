'use client';

import Stepper from '@/app/components/ui/Stepper';
import { useState } from 'react';

export default function Page() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: 'عنوان داشبورد',
      description: 'پیکربندی و تنظیم',
    },
    {
      title: 'انتخاب منابع',
      description: 'تنظیم منابع داده',
    },
    {
      title: 'تنظیمات نهایی',
      description: 'بررسی و تایید',
    },
  ];

  return (
    <div className='flex flex-col  items-center'>
      <h1 className="text-3xl font-bold text-white">ایجاد داشبورد جدید</h1>
      <Stepper steps={steps} currentStep={currentStep} />

      <div className="flex gap-4">
        <button
          onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
          disabled={currentStep === 0}
          className="rounded-lg bg-neutral-800 px-4 py-2 text-sm text-white transition-colors hover:bg-neutral-700 disabled:opacity-50"
        >
          قبلی
        </button>
        <button
          onClick={() =>
            setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))
          }
          disabled={currentStep === steps.length - 1}
          className="bg-primary-500 hover:bg-primary-600 rounded-lg px-4 py-2 text-sm text-white transition-colors disabled:opacity-50"
        >
          بعدی
        </button>
      </div>
    </div>
  );
}
