import '@/app/globals.css';
import { dana, danaFaNum } from '@/app/fonts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="h-full">
      <body
        className={`h-screen antialiased ${danaFaNum.variable} ${dana.variable} font-dana-fanum overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
