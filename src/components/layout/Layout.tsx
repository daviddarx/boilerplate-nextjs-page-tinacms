import MainNav from '@/components/layout/MainNav';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import classNames from 'classnames';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={classNames('p-40 ', inter.className)}>
      <header>
        <h1>
          <Link href='/' className='mb-40 inline-block'>
            <Image src='/logo.svg' alt='logo' width='150' height='47' />
          </Link>
        </h1>
        <MainNav />
      </header>
      <main className='flex-grow py-72'>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}
