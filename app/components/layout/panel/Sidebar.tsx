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
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { cn } from '@/app/lib/utils';

const menuItems = [
  { name: 'داشبورد', icon: RectangleGroupIcon, href: '/dashboard' },
  { name: 'پروفایل کاربری', icon: UsersIcon, href: '' },
  { name: 'تنظیمات', icon: Cog6ToothIcon, href: '' },
  { name: 'هشدارها', icon: BellAlertIcon, href: '' },
  { name: 'کمک', icon: QuestionMarkCircleIcon, href: '' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close sidebar when route changes on mobile
  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    }
  }, [pathname, isMobile]);

  const isLinkActive = (href: string) => {
    if (!href) return false;
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'fixed right-4 top-6 z-50 rounded-lg bg-neutral-800 p-2 text-white lg:hidden',
          isOpen && 'right-[270px]'
        )}
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      {/* Sidebar */}
      <div
        className={cn(
          'fixed right-0 top-0 z-40 flex h-screen w-64 flex-col bg-neutral-900 text-white transition-transform duration-300 ease-in-out lg:fixed',
          !isOpen && 'translate-x-full lg:translate-x-0'
        )}
      >
        <Link href="/" className="flex h-[82px] items-center gap-3 px-6">
          <Image src="/logo.svg" alt="Logo" width={32} height={32} />
          <h1 className="text-xl font-bold">مرکز هشدار ایران</h1>
        </Link>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const isActive = isLinkActive(item.href);
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center space-x-3 rounded-lg p-3 transition-colors',
                      isActive
                        ? 'bg-primary-500 text-white'
                        : 'text-gray-300 hover:bg-neutral-800'
                    )}
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
            className="flex w-full cursor-pointer items-center space-x-3 rounded-lg p-3 text-gray-300 transition-colors hover:bg-gray-800"
          >
            <ArrowRightStartOnRectangleIcon className="h-6 w-6" />
            <span>خروج از حساب</span>
          </button>
        </div>
      </div>
    </>
  );
}
