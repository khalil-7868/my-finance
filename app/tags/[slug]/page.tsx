import { getPostsByTag } from 'lib/get-posts-by-tag';

import BlogCard from 'components/blog-card';

export default async function Tag({
  params
}: {
  params: {
    slug: string;
  };
}) {
  const posts = await getPostsByTag(params.slug);
  return (
    <div className="min-h-screen bg-slate-800 px-10 text-white md:px-40">
      <div className="mt-12 flex w-full flex-col flex-wrap justify-center space-x-4 space-y-5 pb-10 sm:flex-row">
        {posts.map((post: any, idx: any) => (
          <BlogCard key={idx} data={post} />
        ))}
      </div>
    </div>
  );
}
