'use client';

import Header from '@/app/components/layout/dashboard/Header';
import Sidebar from '@/app/components/layout/dashboard/Sidebar';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 bg-neutral-800 p-4 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
