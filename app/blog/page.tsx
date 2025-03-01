import { getPosts } from 'lib/get-posts';

import BlogCard from 'components/blog-card';

export const metadata: Metadata = {
  title: 'Blog',
  datePublished: '1/1/2023',
  breadcrumbs: [{ name: 'Blog', href: '/blog' }]
};

export default async function Page() {
  const blogPosts = await getPosts();

  return (
    <main>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl uppercase font-semibold tracking-wider text-balance text-white mb-4 sm:text-5xl">
              Blog
            </h2>
            <p className="text-lg/8 text-white/60">
              Learn how to grow your business with our expert advice.
            </p>
          </div>

          <div className="h-0.5 max-w-xl mx-auto w-full bg-linear-to-r from-transparent to-transparent via-primary/70 rounded-full my-10" />

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {blogPosts.map((blog: any) => (
              <BlogCard key={blog.id} data={blog} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
