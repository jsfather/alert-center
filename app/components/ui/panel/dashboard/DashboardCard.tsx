'use client';

import DashboardButton from '@/app/components/ui/panel/dashboard/DashboardButton';
import {
  RectangleGroupIcon,
  ListBulletIcon,
  KeyIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import styles from './DashboardCard.module.css';
import { useState, useEffect, useRef } from 'react';

interface DashboardCardProps {
  index?: number;
}

const DashboardCard = ({ index = 0 }: DashboardCardProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<SVGGElement>(null);
  // Use a stable ID based on the card's index
  const gradientId = `paint0_linear_menu_${index}`;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (action: string) => {
    switch (action) {
      case 'archive':
        console.log('Archive clicked');
        break;
      case 'edit':
        console.log('Edit clicked');
        break;
      case 'delete':
        console.log('Delete clicked');
        break;
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="relative h-[228px] w-[368px]">
      <div className="flex flex-col">
        <div className="flex flex-row items-center gap-2 pt-8 pr-10">
          <div className="flex flex-col pb-8">
            <div className="relative z-30 flex flex-row gap-2">
              <RectangleGroupIcon width={17} height={17} />
              <div className="text-[14px] font-bold">
                داشبورد تحلیل آماری الف
              </div>
            </div>
            <div
              className={`${styles.blurContent} ${isMenuOpen ? styles.active : ''}`}
            >
              <div className="mt-3 flex flex-row gap-2">
                <ListBulletIcon
                  width={17}
                  height={17}
                  className="text-gray-400"
                />
                <div className="text-[14px] text-gray-400">
                  تعداد گزارش‌ها: ۲۰
                </div>
              </div>
              <div className="mt-1 flex flex-row gap-2">
                <KeyIcon width={17} height={17} className="text-gray-400" />
                <div className="text-[14px] text-gray-400">
                  وضعیت دسترسی: اختصاصی
                </div>
              </div>
              <div className="mt-1 flex flex-row gap-2">
                <ClockIcon width={17} height={17} className="text-gray-400" />
                <div className="text-[14px] text-gray-400">
                  تاخیر زمانی بروزرسانی: ۲ دقیقه
                </div>
              </div>
            </div>
          </div>
          <Image
            src="/panel/dashboard/graphs.png"
            alt="graphs"
            width={100}
            height={100}
            className={`h-[60px] w-[110px] ${styles.blurContent} ${isMenuOpen ? styles.active : ''}`}
          />
        </div>

        <DashboardButton
          title="مشاهده داشبورد"
          className={`mt-[-16px] self-center ${styles.blurContent} ${isMenuOpen ? styles.active : ''}`}
          prepend={
            <svg
              width="25"
              height="25"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.42505 4.7906L8.26925 1.65137L10.0795 4.7906"
                stroke="white"
                strokeWidth="1.125"
              />
              <path
                d="M9.80974 7.21919L11.5073 7.23201L10.6617 8.69489"
                stroke="white"
                strokeWidth="1.125"
              />
              <path
                d="M5.46182 12.8846L1.82107 12.8571L3.63459 9.71975"
                stroke="white"
                strokeWidth="1.125"
              />
              <path
                d="M5.88484 8.69648L5.04714 7.21989L6.73684 7.22077"
                stroke="white"
                strokeWidth="1.125"
              />
              <path
                d="M11.2179 12.8846L14.8586 12.8571L13.0451 9.71975"
                stroke="white"
                strokeWidth="1.125"
              />
              <path
                d="M7.40259 11.3515L8.2625 12.8153L9.10659 11.3515"
                stroke="white"
                strokeWidth="1.125"
              />
            </svg>
          }
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-10">
        <svg
          width="367"
          height="229"
          viewBox="0 0 367 229"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            ref={buttonRef}
            onClick={handleMenuClick}
            style={{ cursor: 'pointer', pointerEvents: 'auto' }}
          >
            <rect x="0" y="0" width="32" height="32" fill="transparent" />
            <path
              d="M9.37111 4.20396C10.1449 4.98575 11.4112 4.98575 12.185 4.20396C12.9589 3.42218 12.9589 2.1429 12.185 1.36112C11.4112 0.579337 10.1449 0.579337 9.37111 1.36112C8.59728 2.1429 8.59728 3.42218 9.37111 4.20396ZM7.96414 5.62538C7.19031 4.8436 5.92404 4.8436 5.1502 5.62538C4.37637 6.40717 4.37637 7.68645 5.1502 8.46823C5.92404 9.25001 7.19031 9.25001 7.96414 8.46823C8.73797 7.68645 8.73797 6.40717 7.96414 5.62538ZM3.74324 9.88965C2.9694 9.10787 1.70313 9.10787 0.9293 9.88965C0.155467 10.6714 0.155468 11.9507 0.9293 12.7325C1.70313 13.5143 2.9694 13.5143 3.74324 12.7325C4.51707 11.9507 4.51707 10.6714 3.74324 9.88965Z"
              fill="currentColor"
              className="fill-primary-500 hover:fill-teal-200"
            />
          </g>
          <path
            d="M90.3994 14.8624H174.874L187.909 1.69348H330.788L352.6 27.6896V65.8556L366.624 80.0236V146.721L354.094 159.38V201.054L328.587 226.822H303.184L290.836 214.349H203.58L191.296 226.759H119.5L112.407 214.349H58.5566L51.4639 226.759H26.748L0 199.736V25.7823L24.7832 0.745239H76.4268L90.3994 14.8624ZM26.748 6.11829L5.0791 28.0099V196.984H11.1738L24.5469 210.495H116.132L123.261 222.97H187.909L200.257 210.495H290.836L303.184 222.97H327.402L350.081 200.058V157.649L360.58 147.042V80.3439L340.605 60.1642V35.5353L328.587 23.3927V6.11829H191.296L178.43 19.1163H90.3994L77.5342 6.11829H26.748Z"
            fill="url(#paint0_linear_320_16472)"
          />
          <path
            d="M264.315 220.873V216.691H205.438L196.698 225.52L200.072 228.928L208.045 220.873H264.315Z"
            fill="url(#paint1_linear_320_16472)"
          />
          <path
            d="M164.312 8.05482V12.2372H92.0719L83.3323 3.40778L86.7054 5.72205e-06L94.6783 8.05482H164.312Z"
            fill="url(#paint2_linear_320_16472)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_320_16472"
              x1="338.353"
              y1="16.1491"
              x2="-66.4771"
              y2="270.372"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#05A0A3" />
              <stop offset="1" stopColor="#023C3D" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_320_16472"
              x1="259.101"
              y1="217.525"
              x2="240.439"
              y2="257.457"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#05A0A3" />
              <stop offset="1" stopColor="#023C3D" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_320_16472"
              x1="158.067"
              y1="11.4034"
              x2="141.59"
              y2="-30.8214"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#05A0A3" />
              <stop offset="1" stopColor="#023C3D" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div
        ref={menuRef}
        className={`${styles.menu} ${isMenuOpen ? styles.active : ''}`}
      >
        <svg
          width="130"
          height="138"
          viewBox="0 0 130 138"
          fill="none"
          className="absolute inset-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.19568 25.6599L24.6382 7.592L99.1228 7.59195V12.4287H122.223V112.792L104.781 130.247H10.6375V121.221V97.1021H7.19568V25.6599Z"
            fill={`url(#${gradientId})`}
          />
          <path
            d="M127.789 1.55734V117.561L109.084 136.281H1.62976V20.9499L20.3524 1.55734H127.789Z"
            stroke="#02979A"
            strokeWidth="3"
          />
          <defs>
            <linearGradient
              id={gradientId}
              x1="100.837"
              y1="-5.27602"
              x2="-31.5725"
              y2="179.546"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#049FA2" />
              <stop offset="1" stopColor="#013B3C" />
            </linearGradient>
          </defs>
        </svg>
        <div className={styles.menuContent}>
          <p onClick={() => handleMenuItemClick('archive')}>ارسال به آرشیو</p>
          <p onClick={() => handleMenuItemClick('edit')}>ویرایش داشبورد</p>
          <p onClick={() => handleMenuItemClick('delete')}>حذف داشبورد</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
