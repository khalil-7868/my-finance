import { formatDate } from 'lib/utils';
import Image from 'next/image';
import Link from 'next/link';


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
  primary_author: {
    name: string,
    profile_image: string,
    bio: string
  }
}

export default function BlogCard({ data }: { data: IPost }) {
  return (

    <article key={data.id} className="flex hover:ring ring-primary/60 p-1.5 transition-all rounded-[20px] relative z-0 flex-col items-start">
      <div className="relative w-full aspect-video rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2 overflow-hidden">
        {data.feature_image ? (
          <Image
            src={data.feature_image} // avoid post with no images
            alt={data.feature_image_alt || 'Blog Image'}
            width={'0'}
            height={'0'}
            sizes="100vw"
            placeholder="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z' clip-rule='evenodd' /%3E%3C/svg%3E%0A"
            className="size-full bg-contain! object-cover"
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
        <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
      </div>
      <div className="max-w-xl">
        <div className="mt-8 flex items-center gap-x-4 text-xs">
          <time dateTime={data.published_at} className="text-white/60">
            {formatDate(data.published_at)}
          </time>

          <div className="ml-5 flex flex-wrap items-center space-x-4 text-xs">
            {data.tags.map((tag, idx) => (
              <Link className="relative z-20 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100" key={idx} href={`/tags/${tag.slug}`}>
                {tag.name}
              </Link>
            ))}
          </div>

        </div>
        <div className="group relative">
          <h3 className="mt-5 text-lg/6 h-12 line-clamp-2 font-semibold text-white group-hover:text-primary">
            <Link href={`/blog/${data.slug}`}>
              <span className="absolute inset-0" />
              {data.title}
            </Link>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm/6 text-white/60">{data.excerpt}</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          {data.primary_author.profile_image ?
            <Image alt={data.primary_author.name} src={data.primary_author.profile_image} width={120} height={120} className="size-10 rounded-full bg-gray-100" /> : <div className='rounded-full size-10 bg-gray-400' />}
          <div className="text-sm/6">
            <p className="font-semibold text-white/60">
              <span className="absolute inset-0" />
              {data.primary_author.name}
            </p>
            <p className="text-white/50">{data.primary_author.bio}</p>
          </div>
        </div>
      </div>
      <Link href={`/blog/${data.slug}`}  className='absolute inset-0 z-10'/>
    </article>
  );
}
