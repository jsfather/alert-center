'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  HomeIcon, 
  UserIcon, 
  Cog6ToothIcon, 
  BellIcon, 
  QuestionMarkCircleIcon,
  ArrowLeftOnRectangleIcon 
} from '@heroicons/react/24/outline';

const menuItems = [
  { name: 'صفحه اصلی', icon: HomeIcon, href: '/' },
  { name: 'پروفایل کاربری', icon: UserIcon, href: '/profile' },
  { name: 'تنظیمات', icon: Cog6ToothIcon, href: '/settings' },
  { name: 'هشدارها', icon: BellIcon, href: '/alerts' },
  { name: 'کمک', icon: QuestionMarkCircleIcon, href: '/help' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed right-0 top-0 h-screen w-64 bg-gray-900 text-white shadow-xl z-50">
      {/* Logo/Header */}
      <div className="p-4 border-b border-gray-800">
        <h1 className="text-xl font-bold text-right">مرکز هشدار ایران</h1>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center justify-end space-x-3 space-x-reverse p-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-teal-500 text-white'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  <span>{item.name}</span>
                  <item.icon className="w-6 h-6" />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="absolute bottom-0 right-0 w-full p-4 border-t border-gray-800">
        <button
          onClick={() => {/* Add logout logic here */}}
          className="flex items-center justify-end w-full space-x-3 space-x-reverse p-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"
        >
          <span>خروج از حساب</span>
          <ArrowLeftOnRectangleIcon className="w-6 h-6" />
        </button>
      </div>
    </aside>
  );
} 