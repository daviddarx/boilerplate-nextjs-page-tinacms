import ActiveLink from '@/components/core/ActiveLink';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
];

export default function MainNav() {
  return (
    <nav>
      <h2 className='sr-only'>Main nav</h2>
      <ul className='flex gap-4 font-bold uppercase'>
        {navItems.map((item, i) => (
          <li key={i}>
            <ActiveLink
              href={item.href}
              className='bg-gray-300 px-3 py-1 rounded-full'
              activeClassName='bg-gray-900 text-white'
            >
              {item.label}
            </ActiveLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
