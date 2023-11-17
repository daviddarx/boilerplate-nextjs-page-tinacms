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
      <ul className='flex gap-16 uppercase'>
        {navItems.map((item, i) => (
          <li key={i}>
            <ActiveLink
              href={item.href}
              className='bg-white border-gray-200 border px-12 py-4 rounded-full hover:border-gray-500 transition-colors'
              activeClassName='border-gray-500'
            >
              {item.label}
            </ActiveLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
