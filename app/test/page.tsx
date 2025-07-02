'use client'

import { cn } from '@/app/lib/utils';
import { InstagramLogoIcon, TelegramLogoIcon, TwitterLogoIcon, YoutubeLogoIcon } from '@phosphor-icons/react';
import { useState } from 'react';

type SocialItem = {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ size: number; className: string }>;
};

export default function Page() {
  const [selectedSocials, setSelectedSocials] = useState<number[]>([1]);



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

  return <div>
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
  </div>;
}
