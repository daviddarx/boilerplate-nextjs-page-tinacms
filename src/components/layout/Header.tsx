import PageLink from '@/components/ui/PageLink';

export default function Header() {
  return (
    <header>
      <h2 className='h1 p-gutter lg:fixed lg:left-0 lg:top-0'>
        <PageLink href='/'>Logo</PageLink>
      </h2>
    </header>
  );
}
