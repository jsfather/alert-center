'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  RectangleGroupIcon,
  UsersIcon,
  Cog6ToothIcon,
  BellAlertIcon,
  QuestionMarkCircleIcon,
  ArrowRightStartOnRectangleIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

const menuItems = [
  { name: 'صفحه اصلی', icon: RectangleGroupIcon, href: '/dashboard' },
  { name: 'پروفایل کاربری', icon: UsersIcon, href: '/profile' },
  { name: 'تنظیمات', icon: Cog6ToothIcon, href: '/settings' },
  { name: 'هشدارها', icon: BellAlertIcon, href: '/alerts' },
  { name: 'کمک', icon: QuestionMarkCircleIcon, href: '/help' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-64 flex-col bg-neutral-900 text-white">

      <div className="h-[82px] px-6 flex items-center gap-3">
        <Image src="/logo.svg" alt="Logo" width={32} height={32} />
        <h1 className="text-xl font-bold">مرکز هشدار ایران</h1>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 rounded-lg p-3 transition-colors ${
                    isActive
                      ? 'bg-primary-500 text-white'
                      : 'text-gray-300 hover:bg-neutral-800'
                  }`}
                >
                  <item.icon className="h-6 w-6" />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-gray-800 p-4">
        <button
          onClick={() => {}}
          className="flex w-full items-center cursor-pointer space-x-3 rounded-lg p-3 text-gray-300 transition-colors hover:bg-gray-800"
        >
          <ArrowRightStartOnRectangleIcon className="h-6 w-6" />
          <span>خروج از حساب</span>
        </button>
      </div>
    </div>
  );
}
