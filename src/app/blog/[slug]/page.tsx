import PageHeader from '@/components/core/PageHeader';
import client from '@/tina/client';
import type { Post } from '@/tina/types';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

export default async function Blog({ params }: { params: { slug: string } }) {
  /**
   * Following with this app router approach, the caching should be done manually:
   * https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating
   */
  const res = await client.queries.post({ relativePath: `${params.slug}.md` });
  const data = res.data;
  const post = data.post;

  return (
    <div>
      <PageHeader title={`Blog Detail ${params.slug}`} lead='This is the blog page.' />
      <div className='bg-green-500 p-16'>
        <h1>{data.post.title}</h1>
        <TinaMarkdown content={data.post.body} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const postData = await client.queries.postConnection();
  const edges = postData?.data?.postConnection?.edges || [];

  return edges.map((edge) => ({
    slug: edge?.node?._sys.filename || '',
  }));
}
