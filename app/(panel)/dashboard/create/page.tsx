'use client';

import Stepper from '@/app/components/ui/Stepper';
import { useState } from 'react';
import Breadcrumb from '@/app/components/ui/Breadcrumb';
import TextField from '@/app/components/ui/TextField';
import TextArea from '@/app/components/ui/TextArea';
import Button from '@/app/components/ui/Button';
import Select from '@/app/components/ui/Select';
import DateTimePicker from '@/app/components/ui/DateTimePicker';
import { cn } from '@/app/lib/utils';
import { FileText } from 'lucide-react';
import {
  TelegramLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
  YoutubeLogoIcon,
  CheckIcon
} from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CreateDashboard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedSocials, setSelectedSocials] = useState<number[]>([1]);
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

  type SocialItem = {
    id: number;
    title: string;
    description: string;
    icon: React.ComponentType<{ size: number; className: string }>;
  };

  const socialItems: SocialItem[] = [
    {
      id: 1,
      title: 'تلگرام',
      description: 'تحلیل داده‌هـای\n' + 'پیام رسان تلگرام',
      icon: TelegramLogoIcon,
    },
    {
      id: 2,
      title: 'اینستاگرام',
      description: 'تحلیل داده‌های \n' + '  اینستاگرام',
      icon: InstagramLogoIcon,
    },
    {
      id: 3,
      title: 'توییتر',
      description: 'تحلیل داده‌های توییتر  (X)',
      icon: TwitterLogoIcon,
    },
    {
      id: 4,
      title: 'یوتوب',
      description: 'تحلیل داده‌های یوتوب',
      icon: YoutubeLogoIcon,
    },
  ];

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
                <div className="text-lg font-medium text-stone-400">
                  بستر‌های مورد نظر خود را انتخاب کنید
                </div>
                <div className="flex w-full flex-wrap justify-center gap-5">
                  {socialItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.id}
                        className={cn(
                          'flex h-[175px] w-[175px] shrink-0 cursor-pointer flex-col items-center justify-between rounded-lg border-2 bg-neutral-900 p-6 text-center shadow-lg transition-colors select-none sm:w-[calc(50%-0.625rem)] md:w-[175px]',
                          selectedSocials.indexOf(item.id) === -1
                            ? 'border-neutral-700'
                            : 'border-primary-400'
                        )}
                        onClick={() => {
                          if (
                            selectedSocials.length === 1 &&
                            selectedSocials.includes(item.id)
                          ) {
                            return;
                          }
                          setSelectedSocials((prev) =>
                            prev.includes(item.id)
                              ? prev.filter(
                                  (socialItem) => socialItem !== item.id
                                )
                              : [...prev, item.id]
                          );
                        }}
                      >
                        <Icon size={46} className="fill-primary-400" />
                        <div className="text-lg font-bold text-white">
                          {item.title}
                        </div>
                        <div className="text-sm font-bold text-neutral-500">
                          {item.description}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="h-[1px] bg-neutral-700"></div>

                <div className="text-lg font-medium text-stone-400">
                  پیکربندی گزارش
                </div>

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
                  <div className="rounded-full bg-primary-500 w-16 h-16 flex justify-center items-center">
                    <CheckIcon size={40} color="#FFFFFF" />
                  </div>

                  <div className="font-bold text-[25px] text-white mt-8">داشبورد گزارشات با موفقیت ایجاد شد</div>

                  <div className="text-xl font-medium text-stone-300 mt-6">داشبورد شما در پلتفرم‌های “تلگرام، اینستاگرام” با عنوان “تحلیل رفتار‌های ضدخانواده” ایجاد شد.</div>

                  <div className="flex flex-row mt-10 gap-4">
                    <Button variant="secondary">
                      ایجاد داشبورد جدید
                    </Button>
                    <Button variant="primary">
                      ایجاد گزارش‌های داشبورد
                    </Button>
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
