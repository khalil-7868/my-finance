export async function getPosts() {
  let posts;
  const postsUrl = `https://myfinance.rocks/blog/ghost/api/content/posts/?key=c15ea0da51c6b6808c85e28e8c&include=tags,authors`;

  const postsResponse = await fetch(postsUrl).then(async function (res) {
    const status = res.status;
    const data = await res.json();
    return { data, status };
  });

  if (postsResponse.status != 200) {
    console.log(postsResponse.data.error);
    return [];
  }

  posts = postsResponse.data.posts;

  if (!posts) posts = [];

  // posts.map(
  //   (post) => (
  //     (post.published_at = post.published_at.split('T')[0]),
  //     (post.updated_at = post.updated_at.split('T')[0])
  //   )
  // );

  return posts;
}
