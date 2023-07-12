import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';

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
      <body className={inter.className}>
        <main className="flex-auto min-w-0  flex flex-col px-2 md:px-0 bg-slate-800">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
