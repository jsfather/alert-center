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
      <body className={`h-full antialiased ${danaFaNum.variable} ${dana.variable} font-dana-fanum`}>
        <main className="h-full">{children}</main>
      </body>
    </html>
  );
}
