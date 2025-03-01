'use client';

import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Fragment, useEffect, useRef, useState } from 'react';

import Image, { StaticImageData } from 'next/image';

import { cn } from 'lib/utils';

import { MacWindow } from 'components/mac-window';
import { H2, Text } from 'components/typography';

import bgLines from './bg-lines.png';
import { FeaturesShape } from './features-shape';
import futureplan from './future-plan.png';
import overviewImg from './overview.png';
import tangible from './tangible.png';
import transitions from './transitions.png';

// Register GSAP Plugins
// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const features: Feature[] = [
  {
    label: 'Quick Overview',
    tagline: 'Quick overview at the touch of a button:',
    list: [
      'QComprehensive view of your financial situation',
      'Real-time tracking of cash, stocks and liabilities',
      'Detailed expense analysis for optimal financial planning'
    ],
    content: overviewImg
  },
  {
    label: 'Stocks & ETFs',
    tagline: 'Invest wisely and efficiently:',
    list: [
      'Compare your portfolio with market trends',
      'Detailed dividend calendars and analyses',
      'Optimized investment strategies for long-term success'
    ],
    content: overviewImg
  },
  {
    label: 'Transactions',
    tagline: 'Full control over your finances',
    list: [
      'Intelligent categorization of all transactions',
      'Visual representation of your cash flows',
      'Effective management of income and expenses'
    ],
    content: transitions
  },
  {
    label: 'Tangible Assets',
    tagline: 'Your assets at a glance',
    list: [
      'recording and tracking of all assets',
      'Automatic performance analysis',
      'integration into your overall assets'
    ],
    content: tangible
  },
  {
    label: 'Future Plan',
    tagline: 'Shape your financial future',
    list: [
      'Simulate different financial scenarios',
      'long-term asset planning',
      'Strategic decision support'
    ],
    content: futureplan
  },
  {
    label: 'Budgeting',
    tagline: 'Smart budgeting',
    list: ['Individual budget planning', 'Automatic expense tracking', 'goal achievement analysis'],
    content: futureplan
  }
];

interface Feature {
  label: string;
  tagline: string;
  list: string[];
  content: StaticImageData;
}

export function OurFeatures() {
  const [selectedFeature, setSelectedFeature] = useState<Feature>(features[0]);
  const pinnedRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    const mm = gsap.matchMedia();

    let ctx = gsap.context(() => {
      mm.add('(min-width: 1024px)', (context) => {
        let trigger = ScrollTrigger.create({
          trigger: pinnedRef.current,
          start: '80 top',
          end: '+=1000px',
          pin: true,
          pinSpacing: true,
          onUpdate: (self) => {
            let progress = self.progress * 100;
            let index = Math.min(
              Math.floor(progress / (100 / features.length)),
              features.length - 1
            );
            setSelectedFeature(features[index]);
          }
        });

        return () => trigger.kill(); // Cleanup
      });
    }, containerRef);

    return () => {
      ctx.revert(); // Cleanup GSAP context
      mm.revert(); // Cleanup matchMedia
    };
  }, []);

  const changeTabs = (feature: Feature) => {
    setSelectedFeature(feature);
  };

  return (
    <section className="relative z-0 px-5 pb-[138px] pt-[120px]" ref={pinnedRef}>
      {/* Content */}
      <div className="mx-auto w-full max-w-[1120px]">
        {/* Header */}
        <div className="mx-auto mb-15 w-full max-w-[543px] text-center">
          <FeaturesShape className="pointer-events-none mx-auto -mb-14 w-full max-w-[423px] sm:-mb-11 md:w-fit md:max-w-none" />
          <H2>Explore our features</H2>
          <Text className="mt-4">
            Checkout what the users have to say about their experience with MyFinance
          </Text>
        </div>

        {/* Tabs */}
        <div className="hidden rounded-[20px] border border-white/[0.04] lg:flex">
          <div className="-my-px -ml-px w-full max-w-[420px] -space-y-px">
            {features.map((feature, index) => (
              <div
                key={index}
                onClick={() => changeTabs(feature)}
                aria-checked={selectedFeature.label === feature.label}
                className={cn(
                  'relative z-0 cursor-pointer overflow-hidden border border-white/[0.04] bg-dark py-5 pl-6 pr-10 transition-all first:rounded-tl-[20px] last:rounded-bl-[20px] hover:bg-primary/5 hover:backdrop-blur-sm aria-checked:hover:bg-dark',
                  selectedFeature.label === feature.label && 'group'
                )}
              >
                <h4 className="text-lg font-medium leading-[1.4] -tracking-[0.02em] text-white group-aria-checked:text-primary">
                  {feature.label}
                </h4>
                <div className="pointer-events-none invisible h-0 translate-y-10 space-y-3 opacity-0 transition-all duration-200 group-aria-checked:pointer-events-auto group-aria-checked:visible group-aria-checked:mt-3 group-aria-checked:block group-aria-checked:h-auto group-aria-checked:translate-y-0 group-aria-checked:opacity-100">
                  {feature.tagline && (
                    <p className="text-sm leading-6 -tracking-[0.5px] text-white/95">
                      {feature.tagline}
                    </p>
                  )}
                  {feature.list && (
                    <ul className="list-disc pl-3.5">
                      {feature.list.map((item, index) => (
                        <li
                          key={index}
                          className="text-sm leading-7 -tracking-[0.5px] text-light marker:text-primary"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <Image
                  src={bgLines}
                  alt="Lines"
                  className="pointer-events-none invisible absolute inset-0 -z-10 size-full object-cover opacity-0 transition-all duration-300 group-aria-checked:visible group-aria-checked:opacity-100"
                />
                <div className="pointer-events-none invisible absolute -bottom-3.5 left-[87px] -z-10 h-40 w-[211px] translate-y-full rounded-full bg-primary opacity-0 blur-[150px] transition-all duration-300 group-aria-checked:visible group-aria-checked:opacity-100" />
                <div
                  className="absolute bottom-0 left-0 z-10 h-px w-0 rounded-full transition-all duration-300 group-aria-checked:w-[221px]"
                  style={{
                    background: 'linear-gradient(90deg, rgba(220, 65, 63, 0.00) 0%, #DC413F 100%)'
                  }}
                />
              </div>
            ))}
          </div>
          <div className="relative z-0 w-full max-w-[700px] self-end pl-9 pr-7 pt-14" id="id-1">
            <MacWindow className="w-full">
              {features.map((feature, index) => (
                <Image
                  key={index}
                  // ref={feature === selectedFeature ? inViewRef : undefined}
                  id={`feature-${index}`}
                  src={feature.content}
                  alt="Overview"
                  className={cn(
                    'anim-pop hidden h-full w-full object-contain object-top',
                    feature === selectedFeature && 'block'
                  )}
                />
              ))}

              <div
                className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-[218px]"
                style={{
                  background: 'linear-gradient(180deg, rgba(12, 12, 22, 0.00) 0%, #0C0C16 100%)'
                }}
              />
            </MacWindow>
          </div>
        </div>

        {/* {Mobile Data} */}
        <div className="space-y-6 lg:hidden">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl border border-white/[0.04] bg-dark px-4 pt-4 backdrop-blur-2xl"
            >
              <h4 className="mb-2 text-base font-medium -tracking-[0.01em] text-primary">
                {feature.label}
              </h4>
              <Text className="mb-3">{feature.tagline}</Text>
              <ul className="mb-7 space-y-2">
                {feature.list.map((item, index) => (
                  <li
                    key={index}
                    className='relative z-0 pl-3.5 text-sm leading-4 -tracking-[0.5px] before:pointer-events-none before:absolute before:left-0 before:top-1/2 before:size-1.5 before:-translate-y-1/2 before:rounded-full before:border-half before:border-white/20 before:bg-linear-to-b before:from-[#DB3937] before:to-[#A80C0A] before:content-[""]'
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <MacWindow>
                <div className="relative z-0 overflow-hidden">
                  <Image src={feature.content} alt={feature.label} className="-mb-16 w-full" />
                  <div
                    className="absolute inset-x-0 bottom-0 h-[57px]"
                    style={{
                      background: 'linear-gradient(180deg, rgba(12, 12, 22, 0) 0%, #0C0C16 100%)'
                    }}
                  />
                </div>
              </MacWindow>
            </div>
          ))}
        </div>
      </div>

      {/* Backgrounds */}
      <div className="pointer-events-none absolute inset-0 -z-10 size-full overflow-auto">
        {/* Line */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-[1160px] -translate-x-1/2 bg-linear-to-r from-transparent via-primary/60 to-transparent [--tw-gradient-from-position:20%] [--tw-gradient-to-position:80%]" />

        {/* CircleShape */}
        <div
          className="absolute -top-[171px] left-1/2 h-[363px] w-[212px] -translate-x-1/2 rounded-[363px] blur-[306px]"
          style={{
            background: 'linear-gradient(90deg, #E3406F 0%, #E3404D 100%)'
          }}
        />
      </div>
    </section>
  );
}
