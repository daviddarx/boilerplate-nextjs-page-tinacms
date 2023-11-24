import PageHeader from '@/components/core/PageHeader';
import Layout from '@/components/layout/Layout';
import client from '@/tina/client';
import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';

export default function About(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <PageHeader title='Blog' lead='This is the blog page.' />
      <div>
        {props.items.map((item) => (
          <Link href={`blog/${item.slug}`} key={item.slug} className='block font-bold'>
            {item.title}
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const data = await client.queries.postConnection();
  const edges = data?.data.postConnection.edges || [];

  const items = edges.map((edge) => ({
    title: edge?.node?.title,
    slug: edge?.node?._sys.filename,
  }));

  return {
    props: {
      items,
    },
  };
};
