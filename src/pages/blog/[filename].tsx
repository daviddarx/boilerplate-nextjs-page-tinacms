import Layout from '@/components/layout/Layout';
import client from '@/tina/client';
import type { Post } from '@/tina/types';
import { InferGetStaticPropsType } from 'next';
import { useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

const TestComponent = ({ item }: { item: Post }) => {
  return (
    <div>
      <h1>{item.title}</h1>
      <TinaMarkdown content={item.body} />
    </div>
  );
};

export default function BlogPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const post = data.post as Post;

  return (
    <Layout>
      <TestComponent item={post} />
    </Layout>
  );
}

export const getStaticProps = async ({ params }: { params: { filename: string } }) => {
  const tinaProps = await client.queries.post({
    relativePath: `${params.filename}.md`,
  });
  return {
    props: {
      ...tinaProps,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.queries.postConnection();
  const edges = data?.data?.postConnection?.edges || [];

  return {
    paths: edges.map((edge) => ({
      params: { filename: edge?.node?._sys.filename || '' },
    })),
    fallback: false,
  };
};
