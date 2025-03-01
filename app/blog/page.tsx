import BlogCard from 'components/blog-card';
import { getPosts } from 'lib/get-posts';


export const metadata: Metadata = {
  title: 'Blog',
  datePublished: '1/1/2023',
  breadcrumbs: [{ name: 'Blog', href: '/blog' }]
};

export default async function Page() {
  const blogPosts = await getPosts();
  console.log(blogPosts);
  

  return (
    <main className="max-w-7xl mx-auto grid grid-cols-3 gap-5 my-20">
      {blogPosts.map((blog: any) => (
        <BlogCard key={blog.id} data={blog} />
      ))}
    </main>
  );
}
