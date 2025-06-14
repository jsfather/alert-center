'use client';

import DashboardButton from '@/app/components/ui/panel/dashboard/DashboardButton';
import { PlusSquare } from 'lucide-react';
import { useRouter } from 'next/navigation';

const DashboardCard = () => {
  const router = useRouter();

  return (
    <div className="relative h-[228px] w-[368px]">
      <div className="flex h-full flex-col items-center justify-center">
        <div className="text-[14px]">
          برای ایجاد داشبورد جدید روی دکمه زیر کلیک کنید
        </div>
        <div className="mt-[6px] text-[12px] text-neutral-400">
          داشبورد‌های متن ساختگی است که باید در ان زمان قرار بگیرد.
        </div>
        <DashboardButton
          title="ایجاد داشبورد"
          className="mt-[15px]"
          onClick={() => router.push('/dashboard/create')}
          prepend={<PlusSquare size={20} />}
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
          <path
            d="M90.3994 14.8624H174.874L187.909 1.69348H330.788L352.6 27.6896V65.8556L366.624 80.0236V146.721L354.094 159.38V201.054L328.587 226.822H303.184L290.836 214.349H203.58L191.296 226.759H119.5L112.407 214.349H58.5566L51.4639 226.759H26.748L0 199.736V25.7823L24.7832 0.745239H76.4268L90.3994 14.8624ZM26.748 6.11829L5.0791 28.0099V196.984H11.1738L24.5469 210.495H116.132L123.261 222.97H187.909L200.257 210.495H290.836L303.184 222.97H327.402L350.081 200.058V157.649L360.58 147.042V80.3439L340.605 60.1642V35.5353L328.587 23.3927V6.11829H191.296L178.43 19.1163H90.3994L77.5342 6.11829H26.748Z"
            fill="#4b4b4b"
          />
          <path
            d="M264.315 220.873V216.691H205.438L196.698 225.52L200.072 228.928L208.045 220.873H264.315Z"
            fill="#4b4b4b"
          />
          <path
            d="M164.312 8.05482V12.2372H92.0719L83.3323 3.40778L86.7054 5.72205e-06L94.6783 8.05482H164.312Z"
            fill="#4b4b4b"
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
    </div>
  );
};

export default DashboardCard;
