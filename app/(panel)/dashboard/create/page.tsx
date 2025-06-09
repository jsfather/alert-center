'use client';

import Stepper from '@/app/components/ui/Stepper';
import { useState } from 'react';
import Breadcrumb from '@/app/components/ui/Breadcrumb';
import TextField from '@/app/components/ui/TextField';
import TextArea from '@/app/components/ui/TextArea';
import Button from '@/app/components/ui/Button';
import { FileText } from 'lucide-react';

export default function CreateDashboard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
      <div className="flex flex-col items-center">
        <h1 className="mt-8 text-4xl font-bold text-white">
          ایجاد داشبورد جدید
        </h1>
        <div className="my-4 h-[2px] w-1/12 bg-gray-300"></div>

        <Stepper steps={steps} currentStep={currentStep} className="mt-8" />

        <div className="mt-8 w-full max-w-2xl">
          {currentStep === 0 && (
            <div className="space-y-6">
              <div className="text-white font-medium text-lg">اطلاعات پایه</div>
              <TextField
                label="عنوان داشبورد"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="عنوان داشبورد را وارد کنید"
              />
              <TextArea
                label="توضیحات"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="متن مورد نظر خود را بنویسید"
              />
              <div className="flex gap-2">
                <Button
                  variant="secondary"
                  onClick={() => window.history.back()}
                  disabled
                >
                  قبلی
                </Button>
                <div className="flex-grow"></div>
                <Button
                  variant="secondary"
                  onClick={() => window.history.back()}
                >
                  انصراف
                </Button>
                <Button
                  onClick={handleNext}
                  icon={<FileText className="h-4 w-4" />}
                  iconPosition="start"
                >
                  ثبت و ادامه
                </Button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 w-full max-w-2xl">
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="flex gap-2">
                <Button
                  variant="secondary"
                  onClick={handleBack}
                >
                  قبلی
                </Button>
                <div className="flex-grow"></div>
                <Button
                  variant="secondary"
                  onClick={() => window.history.back()}
                >
                  انصراف
                </Button>
                <Button
                  icon={<FileText className="h-4 w-4" />}
                  iconPosition="start"
                  disabled
                >
                  ایجاد گزارش
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
