import ActiveLink from '@/components/ui/ActiveLink';

export default function Header() {
  return (
    <header>
      <h2 className='h1 p-gutter lg:fixed lg:left-0 lg:top-0'>
        <ActiveLink href='/' scrollToTop={true}>
          Logo
        </ActiveLink>
      </h2>
    </header>
  );
}
