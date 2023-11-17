import { routes } from '@/routes';

import PageHeader from '@/components/core/PageHeader';

export default function Blog({ params }: { params: { slug: string } }) {
  return (
    <div>
      <PageHeader title={`Blog Detail ${params.slug}`} lead='This is the blog page.' />
    </div>
  );
}

export async function generateStaticParams() {
  return routes.posts.map((route) => ({
    slug: route.slug,
  }));
}
