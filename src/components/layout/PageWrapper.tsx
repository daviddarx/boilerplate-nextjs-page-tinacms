import Footer from '@/components/layout/Footer';
import { Inter } from 'next/font/google';
import React, { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <React.Fragment>
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
}
