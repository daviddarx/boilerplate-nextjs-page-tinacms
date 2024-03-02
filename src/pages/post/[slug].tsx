import Layout from '@/components/layout/Layout';
import Post from '@/components/pages/Post';
import client from '@/tina/client';
import { PostResult } from '@/types';

export default function BlogPage({ postResult }: { postResult: PostResult }) {
  return (
    <Layout>
      <Post {...postResult} />
    </Layout>
  );
}

export const getStaticProps = async ({ params }: { params: { slug: string } }) => {
  let postResult: PostResult;

  try {
    postResult = await client.queries.post({ relativePath: `${params.slug}.mdx` });
  } catch (error) {
    //TODO: manage 404
    return false;
  }

  return {
    props: {
      postResult: postResult,
    },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const result = await client.queries.postConnection();

  const paths = result.data.postConnection.edges!.map((edge) => {
    return { params: { slug: edge!.node!._sys.filename } };
  });

  console.log(paths); // TODO REMOVE

  return {
    paths: paths,
    fallback: 'blocking',
  };
};
