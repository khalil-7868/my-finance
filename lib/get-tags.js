export async function getTags() {
  let tags;
  const tagsUrl = `${process.env.GHOST_API_URL}/ghost/api/content/tags/?key=${process.env.GHOST_CONTENT_API_KEY}`;

  const tagsResponse = await fetch(tagsUrl).then(async function (res) {
    const status = res.status;
    const data = await res.json();
    return { data, status };
  });

  if (tagsResponse.status != 200) {
    console.log(tagsResponse.data.error);
    return [];
  }

  tags = tagsResponse.data.tags;

  if (!tags) tags = [];

  // posts.map(
  //   (post) => (
  //     (post.published_at = post.published_at.split('T')[0]),
  //     (post.updated_at = post.updated_at.split('T')[0])
  //   )
  // );

  return tags;
}
