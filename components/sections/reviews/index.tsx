'use client';

import { useState } from 'react';

import Image from 'next/image';

import { H2, Text } from 'components/typography';
import { Button } from 'components/ui/Button';

import alon from './alon.png';
import heart from './heart.png';

const reviewsData = [
  {
    userImage: alon,
    name: 'Alon',
    id: '@alon',
    description:
      'Lorem ipsum dolor sit amet, cotur adipiscing elit, sed do eiusmod tempor incididunt ut labore ad minimmployee veniam, nostrud exercitation sed do eiusmod tempor incididunt ut labore quis',
    date: 'Dec 1, 2023',
    source: 'linkedin'
  },
  {
    userImage: alon,
    name: 'Alon',
    id: '@alon',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    date: 'Dec 1, 2023',
    source: 'linkedin'
  },
  {
    userImage: alon,
    name: 'Alon',
    id: '@alon',
    description:
      'Lorem ipsum dolor sit amet, cotur adipiscing elit, sed do eiusmod tempor incididunt ut labore ad minimmployee veniam,  quis',
    date: 'Dec 1, 2023',
    source: 'linkedin'
  },
  {
    userImage: alon,
    name: 'Alon',
    id: '@alon',
    description:
      'Lorem ipsum dolor sit amet, cotur adipiscing elit, sed do eiusmod tempor incididunt ut labore ad t labore quis Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    date: 'Dec 1, 2023',
    source: 'linkedin'
  },
  {
    userImage: alon,
    name: 'Alon',
    id: '@alon',
    description:
      'Lorem ipsum dolor sit amet, cotur adipiscing elit, sed do eiusmod tempor incididunt ut labore ad minimmployee veniam, nostrud exercitation sed do eiusmod tempor incididunt ut labore quis',
    date: 'Dec 1, 2023',
    source: 'linkedin'
  },
  {
    userImage: alon,
    name: 'Alon',
    id: '@alon',
    description:
      'Lorem ipsum dolor sit amet, cotur adipiscing elit, sed do eiusmod tempor incididunt ut labor  ad minimmployee veniam, nostrud exercitation sed do eiusmod tempor incididunt ut labore quis',
    date: 'Dec 1, 2023',
    source: 'linkedin'
  },
  {
    userImage: alon,
    name: 'Alon',
    id: '@alon',
    description:
      'Lorem ipsum dolor inimmployee veniam, nostrud exercitation sed do eiusmod tempor incididunt ut labore quis',
    date: 'Dec 1, 2023',
    source: 'linkedin'
  },
  {
    userImage: alon,
    name: 'Alon',
    id: '@alon',
    description:
      'Lorem ipsum dolor sit amet, cotur adipiscing elit, sed do eiusmod tempo  minimmployee veniam, nostrud exercitation sed do eiusmod tempor incididunt ut labore quis',
    date: 'Dec 1, 2023',
    source: 'linkedin'
  },
  {
    userImage: alon,
    name: 'Alon',
    id: '@alon',
    description:
      'Lorem ipsum dolor sit amet, cotur adipiscing elit, sed do eiusmod tempor incididunt ut labore ad minimmployee ',
    date: 'Dec 1, 2023',
    source: 'linkedin'
  },
  {
    userImage: alon,
    name: 'Alon',
    id: '@alon',
    description:
      'Lorem  labore ad minimmployee veniam, nostrud exercitation sed do eiusmod tempor incididunt ut labore quis',
    date: 'Dec 1, 2023',
    source: 'linkedin'
  },
  {
    userImage: alon,
    name: 'Alon',
    id: '@alon',
    description:
      'Lorem ipsum dolor sit amet, cotur adipiscing elit, sed do eiusmod  lor sit amet, cotur adipiscing elit, sed do eiusmod tempor incididunt ut labore ad minimmployee veniam, nostrud exercitation sed do eiusmod tempor incididunt ut labore quis',
    date: 'Dec 1, 2023',
    source: 'linkedin'
  },
  {
    userImage: alon,
    name: 'Alon',
    id: '@alon',
    description:
      'Lorem ipsum dolor sit amet, cotur adipiscing elit, sed do eiusmod tempor incididunt ut labore ad minimmployee veniam, nostrud exercitation sed do eiusmod tempor incididunt ut labore quis',
    date: 'Dec 1, 2023',
    source: 'linkedin'
  },
  {
    userImage: alon,
    name: 'Alon',
    id: '@alon',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    date: 'Dec 1, 2023',
    source: 'linkedin'
  },
  {
    userImage: alon,
    name: 'Alon',
    id: '@alon',
    description:
      'Lorem ipsum dolor sit amet, cotur adipiscing elit, sed do eiusmod tempor incididunt ut labore ad minimmployee veniam,  quis',
    date: 'Dec 1, 2023',
    source: 'linkedin'
  },
  {
    userImage: alon,
    name: 'Alon',
    id: '@alon',
    description:
      'Lorem ipsum dolor sit amet, cotur adipiscing elit, sed do eiusmod tempor incididunt ut labore ad minimmployee veniam, nostrud exercitation sed do eiusmod tempor incididunt ut labore quis Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    date: 'Dec 1, 2023',
    source: 'linkedin'
  },
  {
    userImage: alon,
    name: 'Alon',
    id: '@alon',
    description:
      'Lorem ipsum dolor sit amet, cotur adipiscing elit, sed do eiusmod tempor incididunt ut labore ad minimmployee veniam, nostrud exercitation sed do eiusmod tempor incididunt ut labore quis lorem ipsul ka juehs jsoojj fdahkd',
    date: 'Dec 1, 2023',
    source: 'linkedin'
  },
  {
    userImage: alon,
    name: 'Alon',
    id: '@alon',
    description:
      'Lorem ipsum dolor sit amet, cotur adipiscing elit, sed do eiusmod tempor incididunt ut labore  lor sit amet, cotur adipiscing elit, sed do eiusmod tempor incididunt ut labore  ad minimmployee veniam, nostrud exercitation sed do eiusmod tempor incididunt ut labore quis',
    date: 'Dec 1, 2023',
    source: 'linkedin'
  },
  {
    userImage: alon,
    name: 'Alon',
    id: '@alon',
    description:
      'Lorem ipsum dolor inimmployee veniam, nostrud exercitation sed do eiusmod tempor incididunt ut labore quis',
    date: 'Dec 1, 2023',
    source: 'linkedin'
  },
  {
    userImage: alon,
    name: 'Alon',
    id: '@alon',
    description:
      'Lorem ipsum dolor sit amet, cotur adipiscing elit, sed do eiusmod tempo  minimmployee veniam, nostrud exercitation sed do eiusmod tempor incididunt ut labore quis',
    date: 'Dec 1, 2023',
    source: 'linkedin'
  },
  {
    userImage: alon,
    name: 'Alon',
    id: '@alon',
    description:
      'Lorem ipsum dolor sit amet, cotur adipiscing elit, sed do eiusmod tempor incididunt ut labore ad minimmployee veniam, nostrud exercitation sed do eiusmod tempor incididunt ut labore quis',
    date: 'Dec 1, 2023',
    source: 'linkedin'
  },
  {
    userImage: alon,
    name: 'Alon',
    id: '@alon',
    description:
      'Lorem ipsum dolor sit amet, cotur adipiscing elit, sed do eiusmod tempor incididunt ut lor sit amet, cotur adipiscing elit, sed do eiusmod tempor incididunt ut labore  labore ad minimmployee veniam, nostrud exercitation sed do eiusmod tempor incididunt ut labore quis',
    date: 'Dec 1, 2023',
    source: 'linkedin'
  },
  {
    userImage: alon,
    name: 'Alon',
    id: '@alon',
    description:
      'Lorem  labore ad minimmployee veniam, nostrud exercitation sed do eiusmod tempor incididunt ut labore quis',
    date: 'Dec 1, 2023',
    source: 'linkedin'
  },
  {
    userImage: alon,
    name: 'Alon',
    id: '@alon',
    description:
      'Lorem ipsum dolor sit amet, cotur adipiscing elit, sed do eiusmod  lor sit amet, cotur adipiscing elit, sed do eiusmod tempor incididunt ut labore ad minimmployee veniam, nostrud exercitation sed do eiusmod tempor incididunt ut labore quis',
    date: 'Dec 1, 2023',
    source: 'linkedin'
  }
];

export function Reviews() {
  const [visibleReviews, setVisibleReviews] = useState(9);

  const loadMoreReviews = () => {
    setVisibleReviews((prevVisible) => Math.min(prevVisible + 9, reviewsData.length));
  };

  const hasMoreReviews = visibleReviews < reviewsData.length;

  return (
    <section className="py-40">
      <div className="relative z-0 mx-auto w-full max-w-[1120px]">
        <Image
          src={heart || '/placeholder.svg'}
          alt="Heart"
          className="pointer-events-none absolute left-1/2 top-0 -z-10 max-w-[710px] -translate-x-1/2"
        />

        <div className="mx-auto max-w-[545px] pb-15 pt-40 text-center">
          <H2 className="mb-4">Loved by our users</H2>
          <Text>Checkout what the users have to say about their experience with MyFinance</Text>
        </div>

        <div className="relative z-0">
          <div className="columns-3 gap-x-4 gap-y-5">
            {reviewsData.slice(0, visibleReviews).map((review, index) => (
              <div
                key={index}
                className="mb-5 break-inside-avoid rounded-[20px] border border-white/[0.04] p-1"
              >
                <div className="relative z-0 transform-gpu rounded-2xl border border-white/[0.08] bg-white/[0.01] p-5 backdrop-blur-[40px]">
                  <div className="mb-5 flex items-center gap-3">
                    <Image
                      src={review.userImage || '/placeholder.svg'}
                      alt={review.name}
                      className="block size-[34px] shrink-0 rounded-full object-cover"
                    />
                    <div>
                      <p className="mb-1 text-xs text-light">{review.name}</p>
                      <p className="text-xs text-light/50">{review.id}</p>
                    </div>
                  </div>
                  <blockquote className="mb-5 text-base leading-normal -tracking-[0.5px] text-light/50">
                    {review.description}
                  </blockquote>
                  <p className="text-xs text-light/50">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
          {hasMoreReviews && (
            <div
              className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-[515px]"
              style={{ background: 'linear-gradient(360deg, #080812 0%, rgba(8, 8, 18, 0) 100%)' }}
            />
          )}
        </div>
        {hasMoreReviews && (
          <Button className="mx-auto tracking-normal" onClick={loadMoreReviews}>
            Load more Reviews
          </Button>
        )}
      </div>
    </section>
  );
}
