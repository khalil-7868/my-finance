export async function getTags() {
  let tags;
  const tagsUrl = `https://myfinance.rocks/blog/ghost/api/content/tags/?key=c15ea0da51c6b6808c85e28e8c`;

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

   

  return tags;
}
