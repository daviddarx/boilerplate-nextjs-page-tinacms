import PageHeader from '@/components/core/PageHeader';
import { routes } from '@/routes';

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
