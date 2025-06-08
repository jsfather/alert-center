'use client';

import Image from 'next/image';
import { BellAlertIcon, UserCircleIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const hasProfileImage = false;

  return (
    <header className="h-[82px] bg-neutral-900 border-b border-neutral-800 gap-4 px-6 flex items-center justify-end">
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-end">
          <span className="text-white text-sm">Admin</span>
          <span className="text-neutral-400 text-xs">admin@hoshdar.fa</span>
        </div>
        <div className="h-10 w-10 rounded-full overflow-hidden relative bg-neutral-800 flex items-center justify-center">
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
