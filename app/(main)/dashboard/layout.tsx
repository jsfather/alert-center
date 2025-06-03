'use client';

import Header from '@/app/components/layout/dashboard/Header';
import Sidebar from '@/app/components/layout/dashboard/Sidebar';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <main className="bg-neutral-800 p-4 h-screen">{children}</main>
      <Sidebar />
    </>
  );
}
