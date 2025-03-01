'use client';

import { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from 'lib/utils';

import { ChevronRight } from 'components/icons/chevron-right';
import { Menu } from 'components/icons/menu';
import { Logo } from 'components/logo';
import { Button } from 'components/ui/Button';

import AnimatedMenu from './animation-menu';

const navigation = [
  {
    label: 'Features',
    href: '/'
  },
  {
    label: 'About Us',
    href: '/about-us'
  },
  {
    label: 'Security',
    href: '/security'
  },
  {
    label: 'Roadmap',
    href: '/roadmap'
  },
  {
    label: 'Pricing',
    href: '/#pricing'
  }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header>
      <div className="relative z-50 mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between gap-10 px-5 py-3 lg:h-auto lg:px-10 lg:py-5">
        <Link href="/" className="block w-[84px] shrink-0 md:w-fit">
          <Logo className="w-full md:w-fit" />
        </Link>

        <ul className="hidden gap-3 rounded-[79px] border border-white/[0.04] bg-white/[0.02] p-2 lg:flex">
          {navigation.map((item, index) => (
            <li key={index}>
              <Link
                className={cn(
                  'block w-fit rounded-[65px] border border-transparent p-2.5 text-sm text-light hover:text-light-1',
                  path === item.href && 'border-white/[0.02] bg-white/[0.04] text-light-1'
                )}
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Button
          href="#"
          className="hidden lg:flex"
          varient="outline"
          icon={{ position: 'right', element: ChevronRight }}
        >
          Get Started
        </Button>

        <Button
          onClick={() => setOpen(!open)}
          varient="outline"
          className="flex items-center justify-center px-2 py-2.5 lg:hidden"
        >
          <Menu isOpen={open} />
        </Button>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

        <AnimatedMenu isOpen={open} navigation={navigation} />
      </div>
    </header>
  );
}
