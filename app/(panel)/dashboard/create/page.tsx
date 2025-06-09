'use client';

import Stepper from '@/app/components/ui/Stepper';
import { useState } from 'react';
import Breadcrumb from '@/app/components/ui/Breadcrumb';

export default function CreateDashboard() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: 'عنوان داشبورد',
    },
    {
      title: 'پیکربندی و تایید',
    },
  ];

  const breadcrumbItems = [
    { label: 'داشبورد', href: '/dashboard' },
    { label: 'ایجاد داشبورد جدید' },
  ];

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
      <div className="flex flex-col items-center">
        <h1 className="mt-8 text-4xl font-bold text-white">ایجاد داشبورد جدید</h1>
        <div className="my-4 h-[2px] w-1/12 bg-gray-300"></div>

        <Stepper steps={steps} currentStep={currentStep} className="mt-8" />

      </div>
    </div>
  );
}
