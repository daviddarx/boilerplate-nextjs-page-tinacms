import Layout from '@/components/layout/Layout';
import client from '@/tina/client';
import type { Post } from '@/tina/types';
import { InferGetStaticPropsType } from 'next';
import { useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

const TestComponent = ({ item }: { item: Post }) => {
  return (
    <Layout>
      <h1>{item.title}</h1>
      <TinaMarkdown content={item.body} />
    </Layout>
  );
};

export default function BlogPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const post = data.post as Post;

  return <TestComponent item={post} />;
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
  const postData = await client.queries.postConnection();
  const edges = postData?.data?.postConnection?.edges || [];

  // REMINDER AUTRE CATEGORIES
  // const categoryData = await client.queries.categoryConnection();
  // const categoryEdges = categoryData.data.categoryConnection.edges;

  return {
    paths: edges.map((edge) => ({
      params: { filename: edge?.node?._sys.filename || '' },
    })),
    fallback: false,
  };
};
