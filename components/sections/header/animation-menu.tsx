'use client';

import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

import Link from 'next/link';

interface Props {
  navigation: {
    label: string;
    href: string;
  }[];
  isOpen: boolean;
}

export default function AnimatedMenu({ navigation, isOpen }: Props) {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        duration: 0.5,
        height: 'auto',
        ease: 'power2.out'
      });

      gsap.fromTo(
        itemsRef.current.filter(Boolean), // Filter to ensure only valid elements are animated
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.3 // Staggered effect for menu items
        }
      );
    } else {
      gsap.to(itemsRef.current.filter(Boolean), {
        opacity: 0,
        y: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: 'power2.in'
      });

      gsap.to(menuRef.current, {
        height: 0,
        duration: 0.4,
        ease: 'power2.in'
      });
    }
  }, [isOpen]);

  return (
    <div ref={menuRef} className="absolute left-0 right-0 top-full h-0 overflow-hidden lg:hidden">
      <div className="h-[calc(100dvh-64px)] bg-dark/50 px-5 py-8 backdrop-blur-xl">
        <ul className="divide-y divide-white/10 overflow-hidden rounded-xl border border-white/10">
          {navigation.map((item, index) => (
            <li
              key={index}
              ref={(el) => (itemsRef.current[index] = el)} // Correctly assigning ref
            >
              <Link
                className="flex items-center gap-4 px-5 py-8 text-2xl font-medium transition-all [--grad:rgba(128,128,135,0.03)] hover:[--grad:rgba(219,57,55,.2)]"
                href={item.href}
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(-45deg, var(--grad) 0, var(--grad) 1.5px, transparent 0, transparent 50%)',
                  backgroundSize: '4px 4px'
                }}
              >
                <span className="w-10 text-right">{(index + 1).toString().padStart(2, '0')}</span>
                <div className="h-0.5 w-10 rounded bg-white/50" />
                <span className="">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
