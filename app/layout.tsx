import type { Metadata } from 'next';
import '@/app/ui/globals.css';

export const metadata: Metadata = {
  title: 'مرکز هشدار',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
