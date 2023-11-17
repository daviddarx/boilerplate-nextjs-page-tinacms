import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import classNames from 'classnames';
import './globals.css';

import MainNav from '@/components/layout/MainNav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js x TinaCMS',
  description: 'Boilerplate for Next.js website with TinaCMS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='h-full'>
      <body className={classNames('flex h-full flex-col bg-gray-50 p-72', inter.className)}>
        <header>
          <MainNav />
        </header>
        <main className='flex-grow py-72'>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
