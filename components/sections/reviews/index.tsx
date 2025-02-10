'use client';

import { useEffect, useState } from 'react';

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
  const [visibleReviews, setVisibleReviews] = useState(4); // Default to 4 for mobile

  // Adjust the number of visible reviews based on screen size
  useEffect(() => {
    const updateVisibleReviews = () => {
      if (window.innerWidth >= 640) {
        setVisibleReviews(9); // 9 reviews on desktop (>= 1024px)
      } else {
        setVisibleReviews(4); // 4 reviews on mobile (< 1024px)
      }
    };

    // Update on initial load
    updateVisibleReviews();

    // Update on window resize
    window.addEventListener('resize', updateVisibleReviews);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateVisibleReviews);
    };
  }, []);

  const loadMoreReviews = () => {
    setVisibleReviews((prevVisible) =>
      Math.min(prevVisible + (window.innerWidth >= 1024 ? 9 : 4), reviewsData.length)
    );
  };

  const hasMoreReviews = visibleReviews < reviewsData.length;

  return (
    <section className="px-5 py-40">
      <div className="relative z-0 mx-auto w-full max-w-[1120px]">
        <Image
          src={heart}
          alt="Heart"
          className="pointer-events-none absolute left-1/2 top-0 -z-10 w-full max-w-[710px] -translate-x-1/2"
        />

        <div className="mx-auto max-w-[545px] pb-15 pt-28 text-center md:pt-40">
          <H2 className="mb-4">Loved by our users</H2>
          <Text>Checkout what the users have to say about their experience with MyFinance</Text>
        </div>

        <div className="relative z-0">
          <div className="columns-1 gap-x-4 gap-y-5 sm:columns-2 md:columns-3">
            {reviewsData.slice(0, visibleReviews).map((review, index) => (
              <div
                key={index}
                className="mb-4 break-inside-avoid rounded-[20px] border border-white/[0.04] p-1 sm:mb-5"
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
                  <blockquote className="mb-5 text-sm -tracking-[0.5px] text-light/50 sm:text-base sm:leading-normal">
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
