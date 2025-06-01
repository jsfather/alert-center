import type { Metadata } from 'next';
import '@/app/ui/globals.css';
import { dana, danaFaNum } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: 'مرکز هشدار',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="h-full">
      <body className={`h-screen antialiased ${danaFaNum.variable} ${dana.variable} font-dana-fanum overflow-x-hidden`}>
        <main className="overflow-x-hidden">{children}</main>
      </body>
    </html>
  );
}
