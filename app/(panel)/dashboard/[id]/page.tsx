'use client';

import Breadcrumb from '@/app/components/ui/Breadcrumb';

export default function Page() {
  const breadcrumbItems = [
    { label: 'خانه', href: '/dashboard' },
    { label: 'داشبورد تحلیلی فرودین' },
  ];

  return (
    <div className="min-h-full p-8">
      <Breadcrumb items={breadcrumbItems} />
      <div className="flex flex-row gap-2 mt-4 flex-wrap">
        {Array.from({ length: 364 }).map((_, index) => (
          <div key={index} className="w-12 h-12 rounded-lg border border-neutral-700"></div>
        ))}
      </div>
    </div>
  );
}
