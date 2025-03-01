import Image from 'next/image';
import { redirect } from 'next/navigation';

import { getPostBySlug } from 'lib/get-post-by-slug';
import { formatDate } from 'lib/utils';

export default async function Post({
  params
}: {
  params: {
    slug: string;
  };
}) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    redirect('/');
  }
  return (
    <div className="min-h-screen py-20 px-10 text-white md:px-40">
      <div className="space-y-4 max-w-(--breakpoint-lg) mx-auto w-full text-left">
        {/* title */}
        <h1 className="text-2xl font-bold md:text-4xl">{post.title}</h1>

        {/* data and reading time */}
        <div className="text-muted flex items-center space-x-2">
          <p className="text-xs font-semibold md:text-sm">{formatDate(post.updated_at)}</p>
          <span>&mdash;&mdash;</span>
          <p className="text-xs font-semibold md:text-sm">{post.reading_time} mins read</p>
        </div>
      </div>

      {/* feature image */}
      <div
        className="relative z-0 mx-auto my-10 aspect-video max-w-(--breakpoint-lg) overflow-hidden lg:rounded-lg"
        style={{ boxShadow: '0 0 20px 10px rgba(256,256,256,.2)' }}
      >
        {post.feature_image && (
          <Image
            src={post.feature_image}
            alt={post.feature_image_alt ? post.feature_image_alt : ''}
            width={'0'}
            height={'0'}
            sizes="100vw"
            className="h-full object-cover w-full rounded-lg"
          />
        )}
      </div>

      <hr className="my-10 max-w-3xl mx-auto" />

      <article className="relative mx-auto w-full max-w-(--breakpoint-lg) my-20 text-white">
        <div className="prose dark:prose-invert prose-xl prose-red mx-auto max-w-none py-3 text-justify">
          {post.html && (
            <div
              dangerouslySetInnerHTML={{
                __html: post.html
              }}
            ></div>
          )}
        </div>
      </article>

      <div className="fixed size-94 rounded-full top-1/3 -z-50 right-7 pointer-events-none bg-linear-to-r from-transparent to-primary blur-[300px]" />
      <div className="fixed size-32 rounded-full top-2/3 -z-50 left-7 pointer-events-none bg-linear-to-r from-amber-400 to-transparent blur-[100px]" />
    </div>
  );
}
