import './globals.css';
import MainNav from '@/components/layout/MainNav';
import { routes } from '@/routes';
import classNames from 'classnames';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

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
          <h1>
            <Link href='/' className='mb-40 inline-block'>
              <Image src='/logo.svg' alt='logo' width='178' height='49' />
            </Link>
          </h1>
          <MainNav />
        </header>
        <main className='flex-grow py-72'>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
