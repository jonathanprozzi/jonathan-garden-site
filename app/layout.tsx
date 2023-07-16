import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import HeaderNavbar from '@/components/header-navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `Jonathan's Digital Garden`,
  description: 'Welcome to my digital garden. 🌱',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          'antialiased max-w-2xl flex flex-col mx-4 mt-8 lg:mx-auto bg-slate-900 text-slate-200'
        )}
      >
        <main className="flex-auto min-w-0 flex flex-col px-2 md:px-0">
          <header>
            <HeaderNavbar />
          </header>
          <section className="text-base">{children}</section>
        </main>
      </body>
    </html>
  );
}
