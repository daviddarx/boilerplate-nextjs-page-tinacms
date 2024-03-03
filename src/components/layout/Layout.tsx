import Header from '@/components/layout/Header';
import Navigation from '@/components/layout/Navigation';
import { NavigationResult } from '@/types';

export default function Layout({
  navigationProps,
  children,
}: {
  navigationProps: NavigationResult;
  children: React.ReactNode;
}) {
  return (
    <div className='lg:grid lg:grid-cols-2'>
      <Header />
      {navigationProps && <Navigation {...navigationProps} />}
      <main className='p-gutter lg:px-0 lg:pr-gutter'>{children}</main>
    </div>
  );
}
