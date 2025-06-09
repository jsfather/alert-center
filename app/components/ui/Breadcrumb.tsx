'use client';

import { cn } from '@/app/lib/utils';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb = ({ items, className }: BreadcrumbProps) => {
  return (
    <nav className={cn('flex items-center gap-4', className)}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center justify-center gap-2">
          {item.href ? (
            <Link
              href={item.href}
              className="text-[16px] text-neutral-400 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-primary-500 text-[16px] transition-colors">
              {item.label}
            </span>
          )}
          <svg
            width="14"
            height="13"
            viewBox="0 0 14 13"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={`h-3 w-3 text-${item.href ? 'gray-400' : 'primary-500'}`}
          >
            <path
              d="M0.491211 0.745605V12.2545H13.6442L0.491211 0.745605Z"
              fill="currentColor"
            />
          </svg>
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
