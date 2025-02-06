'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from 'lib/utils';

import { ChevronRight } from 'components/icons/chevron-right';
import { Logo } from 'components/logo';
import { Button } from 'components/ui/Button';

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
  const path = usePathname();
  return (
    <header>
      <div className="relative z-0 mx-auto flex w-full max-w-[1200px] items-center justify-between gap-10 px-10 py-5">
        <Link href="/" className="block w-fit shrink-0">
          <Logo />
        </Link>

        <ul className="flex gap-3 rounded-[79px] border border-white/[0.04] bg-white/[0.02] p-2">
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

        <Button href="#" varient="outline" icon={{ position: 'right', element: ChevronRight }}>
          Get Started
        </Button>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </header>
  );
}
