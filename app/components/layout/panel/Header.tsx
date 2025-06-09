'use client';

import Image from 'next/image';
import { BellAlertIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { cn } from '@/app/lib/utils';

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const hasProfileImage = false;

  return (
    <header
      className={cn(
        'flex h-[82px] items-center justify-end gap-4 border-b border-neutral-800 bg-neutral-900 px-6',
        'lg:pl-6',
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div className="hidden flex-col items-end sm:flex">
          <span className="text-sm text-white">Admin</span>
          <span className="text-xs text-neutral-400">admin@hoshdar.fa</span>
        </div>
        <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-neutral-800">
          {hasProfileImage ? (
            <Image
              src="/images/avatar.jpg"
              alt="User Avatar"
              fill
              className="object-cover"
            />
          ) : (
            <UserCircleIcon className="h-8 w-8 text-neutral-600" />
          )}
        </div>
      </div>
      <button className="text-white">
        <BellAlertIcon className="h-6 w-6" />
      </button>
    </header>
  );
}
