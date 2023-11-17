import PageHeader from '@/components/core/PageHeader';
import { routes } from '@/routes';
import Link from 'next/link';

export default function Blog() {
  return (
    <div>
      <PageHeader title='Blog' lead='This is the blog page.' />
      <ul className='mt-40'>
        {routes.posts.map((route) => (
          <li key={route.slug}>
            <Link href={`/blog/${route.slug}`}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
