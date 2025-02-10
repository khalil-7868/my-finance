'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

import Image from 'next/image';

import { ChevronRight } from 'components/icons/chevron-right';
import { DollarCircleSign } from 'components/icons/dollar-circle-sign';
import { LockIcon } from 'components/icons/lock-icon';
import { MagnifyngGlass } from 'components/icons/magnifyng-glass';
import { Stars } from 'components/icons/stars';
import { SVGBorder } from 'components/svg-border';
import { H1, Text } from 'components/typography';
import { Badge } from 'components/ui/Badge';
import { Button } from 'components/ui/Button';

import bgshapes from './bg-shapes.png';
import hero_demo_mobile from './hero-demo-mobile.png';
import hero_demo from './hero-demo.png';
import { LineShapes } from './line-shapes';
import { LineShapesMobile } from './line-shapes-mobile';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: MagnifyngGlass,
    label: 'Transparency',
    description: 'Link your bank accounts & stock portfolios. Track everything, anytime, anywhere'
  },
  {
    icon: DollarCircleSign,
    label: 'Financial Planning',
    description:
      'Plan & simulate your financial future with confidence, no more relying on gut instinct'
  },
  {
    icon: LockIcon,
    label: 'Security',
    description: 'Top-tier data security with German servers and trusted partners.'
  }
];

export function Hero() {
  const imageRef = useRef(null);
  const demoRef = useRef(null);

  useEffect(() => {
    if (!imageRef.current) return; // Ensure the ref exists
    if (!demoRef.current) return;

    gsap.fromTo(
      imageRef.current,
      { scale: 1, opacity: 1 }, // Initial scale (normal size)
      {
        scale: 1.4, // Zoom in to 1.5x size
        opacity: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: '0 0', // Start zooming when image enters viewport
          end: 'bottom 500', // End zoom when it reaches the center
          scrub: true // Smooth scrolling effect
        }
      }
    );

    gsap.fromTo(
      demoRef.current,
      {
        filter: 'brightness(90%)',
        opacity: 0.5
      },
      {
        opacity: 1,
        filter: 'brightness(125%)',
        ease: 'power2.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: '-100 0', // Start when the image enters viewport
          end: '800 center', // End when it reaches the center
          scrub: true // Smooth transition
          // markers: true
        }
      }
    );
  }, []);
  return (
    <section className="relative z-0 overflow-hidden px-[22px] pb-40 pt-20 sm:px-10">
      <div className="mx-auto w-full max-w-[348px] md:max-w-[1120px]">
        <div className="mx-auto mb-20 w-full max-w-[352px] md:mb-15 md:max-w-[744px]">
          <Badge icon={{ position: 'left', element: Stars }} center>
            All Finances in one place
          </Badge>
          <H1 className="mb-4 mt-3 text-center">Manage Finances, Plan Future, Build Wealth</H1>
          <Text className="mx-auto mb-11 max-w-[568px] text-center md:mb-10">
            Effortlessly manage your money, plan ahead with confidence, and grow your wealth using
            smart, intuitive tools—all in one secure platform.
          </Text>
          <Button className="mx-auto" href="#" icon={{ position: 'right', element: ChevronRight }}>
            Take control of your money
          </Button>
        </div>

        <div className="px-1 xl:px-0">
          <div className="w-full rounded-2xl border border-white/[0.08] bg-dark/[0.43] backdrop-blur-[84px]">
            <div className="opacity-50 brightness-90" ref={demoRef}>
              <Image
                src={hero_demo}
                alt="Dashboard"
                priority
                className="hidden w-full rounded-2xl object-cover md:block"
              />
              <Image
                src={hero_demo_mobile}
                alt="Dashboard"
                priority
                className="w-full rounded-2xl object-cover md:hidden"
              />
            </div>
          </div>
        </div>
      </div>
      <Image
        ref={imageRef}
        priority
        fetchPriority="high"
        src={bgshapes}
        alt="Shapes"
        className="pointer-events-none absolute left-1/2 top-1/4 -z-20 max-w-[380px] -translate-x-1/2 sm:w-auto sm:max-w-full md:top-[74px]"
      />

      <div className="relative z-0">
        <LineShapes className="pointer-evednts-none left-0 -mt-[97px] hidden w-full md:block" />
        <LineShapesMobile className="pointer-evednts-none left-0 -mt-[97px] block w-full md:hidden" />

        <div className="mx-auto -mt-3.5 grid max-w-[1116px] grid-cols-1 items-start gap-[25px] sm:-mt-2.5 md:-mt-15 md:grid-cols-3 lg:-mt-2.5">
          {features.map((feature, index) => (
            <SVGBorder
              key={index}
              borderRadius={12}
              borderGradientDirection="to bottom"
              borderGradient={['#ffffff14', '#ffffff08']}
            >
              <div className="rounded-xl bg-white/[0.02] px-6 py-[22px]">
                <div className="mb-2 flex items-center gap-2">
                  <feature.icon className="shrink-0 text-[#F2F2F3]" />
                  <h4 className="text-base font-normal leading-none -tracking-[0.5px] text-white/95">
                    {feature.label}
                  </h4>
                </div>
                <p className="text-sm leading-[1.643] -tracking-[0.5px] text-light/95">
                  {feature.description}
                </p>
              </div>
            </SVGBorder>
          ))}
        </div>
      </div>
    </section>
  );
}
