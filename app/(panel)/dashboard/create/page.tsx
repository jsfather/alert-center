'use client';

import Stepper from '@/app/components/ui/Stepper';
import { useState } from 'react';
import Breadcrumb from '@/app/components/ui/Breadcrumb';
import TextInput from '@/app/components/ui/TextInput';
import TextArea from '@/app/components/ui/TextArea';
import Button from '@/app/components/ui/Button';
import Select from '@/app/components/ui/Select';
import DateTimePicker from '@/app/components/ui/DateTimePicker';
import { FileText } from 'lucide-react';
import { CheckIcon } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchDrawerInput from '@/app/components/ui/SearchDrawerInput';
import TagInput from '@/app/components/ui/TagInput';

export default function CreateDashboard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [tags, setTags] = useState([]);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    updateInterval: '',
    keywords: [] as string[],
    hashtags: [] as string[],
  });

  const steps = [
    {
      title: 'عنوان داشبورد',
    },
    {
      title: 'پیکربندی',
    },
    {
      title: 'تایید نهایی',
    },
  ];

  const breadcrumbItems = [
    { label: 'داشبورد', href: '/dashboard' },
    { label: 'ایجاد داشبورد جدید' },
  ];

  const updateIntervalOptions = [
    { value: '1h', label: 'هر یک ساعت' },
    { value: '2h', label: 'هر دو ساعت' },
    { value: '6h', label: 'هر شش ساعت' },
    { value: '12h', label: 'هر دوازده ساعت' },
    { value: '24h', label: 'هر بیست و چهار ساعت' },
  ];

  const keywordOptions = [
    { value: 'politics', label: 'سیاست' },
    { value: 'economy', label: 'اقتصاد' },
    { value: 'technology', label: 'تکنولوژی' },
    { value: 'sports', label: 'ورزش' },
    { value: 'entertainment', label: 'سرگرمی' },
    { value: 'health', label: 'سلامت' },
    { value: 'education', label: 'آموزش' },
    { value: 'science', label: 'علم' },
  ];

  const hashtagOptions = [
    { value: 'iran', label: '#ایران' },
    { value: 'tech', label: '#تکنولوژی' },
    { value: 'news', label: '#اخبار' },
    { value: 'crypto', label: '#ارز_دیجیتال' },
    { value: 'startup', label: '#استارتاپ' },
    { value: 'ai', label: '#هوش_مصنوعی' },
    { value: 'business', label: '#کسب_و_کار' },
    { value: 'digital', label: '#دیجیتال' },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="min-h-full p-8">
      <Breadcrumb items={breadcrumbItems} />
      <div className="mx-auto mt-8 flex w-full max-w-7xl flex-col items-center">
        <h1 className="text-4xl font-bold text-white">ایجاد داشبورد جدید</h1>
        <div className="my-4 h-[2px] w-1/12 bg-gray-300"></div>

        <Stepper steps={steps} currentStep={currentStep} className="mt-8" />

        <div className="relative mt-8 w-full pb-8">
          <AnimatePresence mode="wait">
            {currentStep === 0 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="mx-auto w-full max-w-2xl space-y-6"
              >
                <div className="text-lg font-medium text-white">
                  اطلاعات پایه
                </div>
                <TextInput
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
                <div className="flex flex-col gap-2 sm:flex-row">
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
              </motion.div>
            )}

            {currentStep === 1 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="mx-auto w-full max-w-4xl space-y-6"
              >
                <SearchDrawerInput
                  label="عبارت جستجو"
                  placeholder="عبارت جستجو خود را وارد کنید"
                />

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <DateTimePicker
                    label="تاریخ و زمان شروع"
                    value={formData.startDate}
                    onChange={(value) => handleDateChange('startDate', value)}
                  />
                  <DateTimePicker
                    label="تاریخ و زمان پایان"
                    value={formData.endDate}
                    onChange={(value) => handleDateChange('endDate', value)}
                  />
                  <Select
                    label="وقفه زمانی به‌روزرسانی گزارش‌ها"
                    options={updateIntervalOptions}
                    value={formData.updateInterval}
                    onChange={(value) =>
                      handleSelectChange('updateInterval', value)
                    }
                  />
                </div>

                <Select
                  label="کلمات کلیدی"
                  options={keywordOptions}
                  value={formData.keywords}
                  onChange={(value) => handleSelectChange('keywords', value)}
                  multiple
                  placeholder="کلمات کلیدی را وارد کنید"
                />

                <Select
                  label="هشتگ‌ها"
                  options={hashtagOptions}
                  value={formData.hashtags}
                  onChange={(value) => handleSelectChange('hashtags', value)}
                  multiple
                  placeholder="هشتگ‌ها را وارد کنید"
                />

                <div className="h-[1px] bg-neutral-700"></div>

                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button variant="secondary" onClick={handleBack}>
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
                    ایجاد گزارش
                  </Button>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="mx-auto w-full max-w-4xl space-y-6"
              >
                <div className="flex flex-col items-center">
                  <div className="bg-primary-500 flex h-16 w-16 items-center justify-center rounded-full">
                    <CheckIcon size={40} color="#FFFFFF" />
                  </div>

                  <div className="mt-8 text-[25px] font-bold text-white">
                    داشبورد گزارشات با موفقیت ایجاد شد
                  </div>

                  <div className="mt-6 text-xl font-medium text-stone-300">
                    داشبورد شما در پلتفرم‌های “تلگرام، اینستاگرام” با عنوان
                    “تحلیل رفتار‌های ضدخانواده” ایجاد شد.
                  </div>

                  <div className="mt-10 flex flex-row gap-4">
                    <Button variant="secondary">ایجاد داشبورد جدید</Button>
                    <Button variant="primary">ایجاد گزارش‌های داشبورد</Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
