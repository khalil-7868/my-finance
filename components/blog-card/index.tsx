import Image from 'next/image';
import Link from 'next/link';

import loadingImage from './loading-image.gif';

export interface ITag {
  id: string;
  name: string;
  slug: string;
}

export interface IPost {
  id: string;
  title: string;
  slug: string;
  html: string;
  feature_image: string;
  feature_image_alt?: string;
  updated_at: string;
  published_at: string;
  excerpt: string;
  reading_time: number;
  tags: ITag[];
}

export default function BlogCard({ data }: { data: IPost }) {
  return (
    <div className="cursor-pointer rounded-lg border bg-slate-700 p-3">
      <Link href={`/blog/${data.slug}`}>
        {/* feature image */}
        <div className="aspect-video overflow-hidden rounded-lg bg-gray-700">
          {data.feature_image ? (
            <Image
              src={data.feature_image} // avoid post with no images
              alt={data.feature_image_alt || 'Blog Image'}
              width={'0'}
              height={'0'}
              sizes="100vw"
              placeholder="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z' clip-rule='evenodd' /%3E%3C/svg%3E%0A"
              className="size-full !bg-contain object-cover"
            />
          ) : (
            <div className="flex size-full items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>

        {/* title */}
        <div className="mt-2 line-clamp-2 text-lg font-semibold">{data.title}</div>
      </Link>

      {/* tags */}
      <div className="mt-2 flex">
        <span className="mt-2 py-1 text-sm">Tags:</span>
        <div className="ml-5 flex flex-wrap items-center space-x-4 text-xs">
          {data.tags.map((tag, idx) => (
            <Link className="mt-2 rounded-lg border px-2 py-1" key={idx} href={`/tags/${tag.slug}`}>
              {tag.name}
            </Link>
          ))}
        </div>
      </div>

      <Link href={`/blog/${data.slug}`}>
        {/* excerpt */}
        <div className="mt-2 line-clamp-4 text-justify">{data.excerpt}</div>
      </Link>
    </div>
  );
}
