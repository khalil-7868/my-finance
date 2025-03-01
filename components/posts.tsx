import { getPosts } from 'lib/posts';
import Link from "next/link";

export async function getStaticProps() {
  const posts = await getPosts()

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: { posts }
  }
}

export function Posts(props) {
  <ul>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil repellat accusamus molestiae libero unde alias porro sint, numquam voluptate consequuntur. Accusamus facere earum rem incidunt asperiores, culpa totam aperiam quisquam!
    {props.posts.map(post => (
      <li key={post.id}>{post.title}</li>
    ))}
  </ul>
}