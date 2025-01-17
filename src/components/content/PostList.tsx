import CustomMarkdown from '@/components/ui/CustomMarkdown';
import PageLink from '@/components/ui/PageLink';
import { PageBlocksPostList } from '@/tina/types';
import { PostsFilter, PostsResult } from '@/types';
import { formatDate } from '@/utils/core';
import { postRoute } from '@/utils/tina';
import classNames from 'classnames';
import { tinaField, useTina } from 'tinacms/dist/react';

export default function PostList(props: {
  blockProps: PageBlocksPostList;
  postsProps: PostsResult;
  filterProps: PostsFilter[];
}) {
  const { data } = useTina(props.postsProps);
  const posts = data.postConnection.edges;

  return (
    <section>
      <div className='text-container'>
        {!props.blockProps.hideTitle && (
          <h2 data-tina-field={tinaField(props.blockProps, 'title')}>{props.blockProps.title}</h2>
        )}
        {props.blockProps.description && (
          <div data-tina-field={tinaField(props.blockProps, 'description')}>
            <CustomMarkdown content={props.blockProps.description} />
          </div>
        )}
      </div>

      {posts && posts?.length > 0 && props.filterProps && (
        <div className='mt-gutter'>
          <ul className='flex flex-wrap gap-8'>
            {props.filterProps.map((filter, i) => {
              return (
                <li key={i}>
                  <PageLink
                    href={filter.url}
                    className={classNames('button', {
                      'button--primary': filter.active,
                    })}
                    scrollToTop={false}
                  >
                    {filter.label}
                  </PageLink>
                </li>
              );
            })}
          </ul>

          <ul className='mt-gutter'>
            {posts.map((edge) => {
              const post = edge?.node;

              if (!post) {
                return null;
              }

              return (
                <li key={post._sys.filename} className='border-t border-black'>
                  <PageLink
                    href={`${postRoute}/${post._sys.filename}`}
                    className='flex flex-col gap-8 py-gutter lg:flex-row lg:items-center lg:justify-between lg:gap-32'
                  >
                    <h3 data-tina-field={tinaField(post, 'title')}>{post.title}</h3>
                    <div className='flex gap-16'>
                      <span className='font-bold uppercase'>{post.category.title}</span> –
                      <span>{formatDate(post.createdAt)}</span>
                    </div>
                  </PageLink>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
}
