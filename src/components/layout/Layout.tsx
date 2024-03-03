import Header from '@/components/layout/Header';
import Navigation from '@/components/layout/Navigation';
import { NavigationResult } from '@/types';
import classNames from 'classnames';
import { Bricolage_Grotesque } from 'next/font/google';

const font = Bricolage_Grotesque({ weight: ['400', '600'], subsets: ['latin'] });

export default function Layout({
  navigationProps,
  children,
}: {
  navigationProps: NavigationResult;
  children: React.ReactNode;
}) {
  return (
    <div className={classNames('lg:grid lg:grid-cols-2', font.className)}>
      <Header />
      {navigationProps && <Navigation {...navigationProps} />}
      <main className='p-gutter lg:px-0 lg:pr-gutter'>{children}</main>
    </div>
  );
}
