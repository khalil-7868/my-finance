'use client';

import gsap from 'gsap';
import { ElementType, useEffect, useRef, useState } from 'react';

import Link from 'next/link';

import { cn } from 'lib/utils';

import { Minus } from './icons/minus';
import { Plus } from './icons/plus';

interface Props {
  title: string;
  social?: boolean;
  list: {
    label: string | ElementType;
    href: string;
  }[];
}

export function FooterAccordion(props: Props) {
  const { title, social = false, list } = props;
  const [openAcc, setOpenAcc] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        height: openAcc ? 'auto' : 0,
        opacity: openAcc ? 1 : 0,
        duration: 0.5,
        ease: 'power2.out'
      });
    }

    if (iconRef.current) {
      gsap.to(iconRef.current, {
        rotate: openAcc ? 180 : 0, // Rotates icon 90° when opening, resets when closing
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  }, [openAcc]);

  return (
    <div className="w-full">
      <button
        onClick={() => setOpenAcc(!openAcc)}
        className={
          'flex w-full items-center justify-between gap-8 py-6 text-left text-base font-medium -tracking-[1.92%] text-white'
        }
      >
        <span>{title}</span>
        <div
          ref={iconRef}
          className="flex size-[17px] shrink-0 items-center justify-center rounded border border-white/[0.12] bg-white/[0.02]"
        >
          {openAcc ? <Minus /> : <Plus />}
        </div>
      </button>
      <div ref={contentRef} className="h-0 overflow-hidden opacity-0">
        <ul className={cn('pb-6', social && 'flex flex-wrap items-center gap-4')}>
          {list.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="text-sm leading-[2.2] -tracking-[0.5px] text-white/55 hover:text-primary"
              >
                {typeof item.label === 'string' ? item.label : <item.label />}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
