let lastUpdated = null;

export async function getPosts() {
  const postsUrl = `https://myfinance.rocks/blog/ghost/api/content/posts/?key=c15ea0da51c6b6808c85e28e8c&include=tags,authors`;

  const postsResponse = await fetch(postsUrl).then(async (res) => {
    const data = await res.json();
    return { data, status: res.status };
  });

  if (postsResponse.status !== 200) {
    console.log(postsResponse.data.error);
    return [];
  }

  const posts = postsResponse.data.posts || [];

  if (posts.length > 0) {
    const latestUpdate = posts[0].updated_at; // Assuming API returns `updated_at`

    if (lastUpdated && latestUpdate !== lastUpdated) {
      console.log('API data has been updated!');
    }
    lastUpdated = latestUpdate;
  }

  return posts;
}
