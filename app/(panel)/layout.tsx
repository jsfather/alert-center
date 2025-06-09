'use client';

import Header from '@/app/components/layout/panel/Header';
import Sidebar from '@/app/components/layout/panel/Sidebar';

export default function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-neutral-800">
      <div className="flex w-full flex-col lg:mr-64">
        <Header />
        <main className="flex-1 p-8">{children}</main>
      </div>
      <Sidebar />
    </div>
  );
}
