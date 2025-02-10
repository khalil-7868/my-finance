'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

import Link from 'next/link';

import { FooterAccordion } from 'components/footer-accordion';
import { Discord } from 'components/icons/discord';
import { Facebook } from 'components/icons/facebook';
import { Instagram } from 'components/icons/instagram';
import { Linkedin } from 'components/icons/linkedin';
import { X } from 'components/icons/x';
import { Logo } from 'components/logo';
import { Text } from 'components/typography';
import { Button } from 'components/ui/Button';

import { FinanceText } from './finance-text';

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const elementRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (element) {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 100
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: 'top bottom-=100',
            end: 'bottom center',
            scrub: true
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <footer>
      <FinanceText
        ref={elementRef}
        className="pointer-events-none relative z-0 mx-auto -mb-12 w-full px-6"
      />
      <div className="relative z-10 overflow-hidden bg-gradient-to-r from-transparent via-white/[0.03] to-transparent px-5 backdrop-blur-[40px] md:px-8">
        <div className="relative z-0 mx-auto w-full max-w-[1108px] pb-6 pt-14">
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className="flex flex-col items-center justify-between gap-12 md:flex-row md:gap-10">
            <div className="w-full md:max-w-[287px]">
              <Link href="/" className="mb-9 block w-fit md:mb-8">
                <Logo className="h-fit w-[122px]" />
              </Link>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</Text>
            </div>
            <div className="hidden w-full flex-col items-start justify-between gap-10 sm:flex sm:flex-row md:max-w-[646px]">
              <div className="w-[72px]">
                <Text className="mb-7 font-medium text-white">Navigation</Text>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="#"
                      className="text-base text-white/60 transition-all hover:text-primary"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base text-white/60 transition-all hover:text-primary"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base text-white/60 transition-all hover:text-primary"
                    >
                      Security
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-[90px]">
                <Text className="mb-7 font-medium text-white">Navigation</Text>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="#"
                      className="text-base text-white/60 transition-all hover:text-primary"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base text-white/60 transition-all hover:text-primary"
                    >
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base text-white/60 transition-all hover:text-primary"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-[131px]">
                <Text className="mb-7 font-medium text-white">Getting Started</Text>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="#"
                      className="text-base text-white/60 transition-all hover:text-primary"
                    >
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base text-white/60 transition-all hover:text-primary"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base text-white/60 transition-all hover:text-primary"
                    >
                      Forgot Password
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-[132px]">
                <Text className="mb-7 font-medium text-white">Social</Text>
                <ul className="flex items-center gap-3">
                  <li className="shrink-0">
                    <Link className="transition-all hover:text-primary" href="#">
                      <Linkedin />
                    </Link>
                  </li>
                  <li className="shrink-0">
                    <Link className="transition-all hover:text-primary" href="#">
                      <Instagram />
                    </Link>
                  </li>
                  <li className="shrink-0">
                    <Link className="transition-all hover:text-primary" href="#">
                      <X />
                    </Link>
                  </li>
                  <li className="shrink-0">
                    <Link className="transition-all hover:text-primary" href="#">
                      <Facebook />
                    </Link>
                  </li>
                  <li className="shrink-0">
                    <Link className="transition-all hover:text-primary" href="#">
                      <Discord />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full divide-y divide-white/25 border-b border-white/25">
              <FooterAccordion
                title="Navigation"
                list={[
                  { label: 'Features', href: '#' },
                  { label: 'About Us', href: '#' },
                  { label: 'Security', href: '#' }
                ]}
              />
              <FooterAccordion
                title="Getting Started"
                list={[
                  { label: 'Features', href: '#' },
                  { label: 'About Us', href: '#' },
                  { label: 'Security', href: '#' }
                ]}
              />
              <FooterAccordion
                social
                title="Social"
                list={[
                  { label: Linkedin, href: '#' },
                  { label: Instagram, href: '#' },
                  { label: X, href: '#' },
                  { label: Facebook, href: '#' },
                  { label: Discord, href: '#' }
                ]}
              />
            </div>
          </div>

          <div className="mb-9 mt-20 hidden h-px w-full bg-white/[.24] md:block" />

          <div className="mt-9 flex flex-col justify-between gap-7 md:mt-0 md:flex-row md:items-center md:gap-10">
            <div className="w-full md:max-w-[319px]">
              <p className="mb-4 pb-0.5 text-base font-medium -tracking-[1.92%] text-white md:text-xl">
                Subscribe to our Newsletter
              </p>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</Text>
            </div>
            <div className="w-full md:max-w-[400px]">
              <div className="mb-4 flex items-center gap-3">
                <input
                  type="email"
                  className="block h-10 w-full flex-1 rounded-lg border border-white/[0.12] bg-white/[0.02] px-4 text-white"
                  placeholder="Enter email id..."
                />
                <Button className="h-10 px-6">Subscribe</Button>
              </div>
              <p className="text-xs leading-5 text-white/60">
                By submitting your email address, you agree to receive MyFinance’s monthly
                newsletter. For more information, please read our{' '}
                <Link className="underline" href="#">
                  privacy policy
                </Link>
                . You can always withdraw your consent.
              </p>
            </div>
          </div>

          <div className="mb-9 mt-9 h-px w-full bg-white/[.24] md:mt-20" />

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center md:gap-10">
            <p className="text-xs text-white/50">
              Copyright &copy; {new Date().getFullYear()} MyFinance. All rights reserved.
            </p>
            <div className="flex items-center gap-15">
              <Link href="#" className="text-xs text-white/50 hover:underline">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-white/50 hover:underline">
                Terms of Services
              </Link>
            </div>
          </div>
        </div>

        {/* <GradientShapes className='absolute bottom-0 left-0 w-full pointer-events-none -z-10'/> */}
        <div className="pointer-events-none absolute left-0 top-full -z-10 h-[391px] w-[970px] -translate-y-16 transform-gpu rounded-[100%] bg-gradient-to-r from-transparent via-primary to-[#DA368F] mix-blend-plus-lighter blur-[350px]" />
        <div className="pointer-events-none absolute left-1/2 top-full -z-10 h-[391px] w-[970px] -translate-x-1/2 -translate-y-16 transform-gpu rounded-[100%] bg-gradient-to-r from-transparent via-primary to-[#DA368F] mix-blend-plus-lighter blur-[350px]" />
        <div className="pointer-events-none absolute right-0 top-full -z-10 h-[391px] w-[970px] -translate-y-16 transform-gpu rounded-[100%] bg-gradient-to-r from-transparent via-primary to-primary mix-blend-plus-lighter blur-[350px]" />
      </div>
    </footer>
  );
}
