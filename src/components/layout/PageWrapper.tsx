import Footer from '@/components/layout/Footer';
import React, { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <React.Fragment>
      {children}
      <Footer />
    </React.Fragment>
  );
}
