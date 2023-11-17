import ActiveLink from '@/components/core/ActiveLink';
import { routes } from '@/routes';

export default function MainNav() {
  return (
    <nav>
      <h2 className='sr-only'>Main nav</h2>
      <ul className='flex gap-16 uppercase'>
        {routes.main.map((item, i) => (
          <li key={i}>
            <ActiveLink
              href={`/${item.slug}`}
              className='rounded-full border border-gray-200 px-12 py-4 transition-colors hover:border-gray-500'
              activeClassName='bg-black text-white border-black'
            >
              {item.label}
            </ActiveLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
