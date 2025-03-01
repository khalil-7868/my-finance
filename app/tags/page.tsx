import Link from 'next/link';

import { getTags } from 'lib/get-tags';

export default async function Tags() {
  // const sampleTags = [
  //   {
  //     id: "ddafadf",
  //     name: "Getting Started",
  //     slug: "getting-started",
  //   },
  //   {
  //     id: "ddafadf",
  //     name: "Fiction",
  //     slug: "fiction",
  //   },
  // ];

  const tags = await getTags();
  return (
    <div className="min-h-screen bg-slate-800 px-10 text-white md:px-40">
      {tags ? (
        <div className="mt-10 flex flex-wrap space-x-5">
          {tags.map((tag: any, idx: any) => (
            <Link
              key={idx}
              href={`/tags/${tag.slug}`}
              className="rounded-lg border px-10 py-4 text-xl font-semibold"
            >
              {tag.name}
            </Link>
          ))}
        </div>
      ) : (
        <div>no tags yet</div>
      )}
    </div>
  );
}
