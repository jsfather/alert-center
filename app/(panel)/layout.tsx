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
      <Sidebar />
      <div className="flex w-full flex-col lg:mr-64">
        <Header />
        <main className="flex-1 overflow-auto bg-[#262626] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-neutral-600 [&::-webkit-scrollbar-thumb]:rounded-full">
          <div className="min-h-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
