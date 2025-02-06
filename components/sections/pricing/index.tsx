import Image from 'next/image';

import { cn } from 'lib/utils';

import { CheckCircle } from 'components/icons/check-circle';
import { ChevronRight } from 'components/icons/chevron-right';
import { H2, Text } from 'components/typography';
import { Button } from 'components/ui/Button';

import { DotCircles } from './dot-circles';
import pricing_shape from './pricing-shape.png';
import { RecShape } from './rec-shape';

const pricing_features = [
  {
    highlighted: true,
    name: 'Early Adopter',
    remaining: 246,
    monthly: 6.99,
    tagline: 'get all features as an early adopter for a permanent price of €6.99',
    included: [
      '7-day free trial',
      '6.99 € monthly or 64.99 € annually',
      'Can be canceled at any time',
      <>
        Forever access to all <span>functions</span>
      </>
    ]
  },
  {
    name: 'Regular',
    highlighted: false,
    remaining: null,
    monthly: 12.99,
    tagline: 'get all currently available features as a regular user for a price of €12.99',
    included: [
      '7-day free trial',
      '6.99 € monthly or 64.99 € annually',
      'Can be canceled at any time',
      <>
        Forever access to all <span>functions</span>
      </>
    ]
  }
];

export function Pricing() {
  return (
    <section id="pricing">
      <div className="relative z-0 mx-auto w-full max-w-[818px] pb-15 pt-[454px]">
        <Image
          src={pricing_shape}
          alt="gradient shape"
          className="pointer-events-none absolute left-0 top-0 -z-10 w-full object-contain object-bottom"
        />

        <div className="mx-auto mb-15 w-full max-w-[615px] space-y-4 text-center">
          <H2>
            Enjoy all features <br /> at a fixed monthly price
          </H2>
          <Text>
            Simple and transparent pricing structure that allows you to take control of your money
            and make manage it smartly
          </Text>
        </div>

        <div className="relative z-0">
          <div className="grid grid-cols-2 gap-6">
            {pricing_features.map((price, index) => (
              <div
                key={index}
                className={cn(
                  'rounded-3xl border border-white/[.12] bg-white/[0.02] px-5 pb-5 pt-6',
                  { 'relative z-0 overflow-hidden': price.highlighted }
                )}
              >
                <p
                  className={cn('mb-8 text-base font-medium', { 'text-white': price.highlighted })}
                >
                  {price.name}
                </p>
                <h3 className="text-5xl font-medium -tracking-[1.92px] text-white">
                  {price.monthly} <span className="text-primary">€</span>
                  <small className="ml-1 text-base tracking-normal text-light">monthly</small>
                </h3>
                <div
                  className="mb-7 mt-5 h-px w-full"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='359' height='2' viewBox='0 0 359 2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L358 1.00003' stroke='white' stroke-opacity='0.1' stroke-linecap='round' stroke-dasharray='6 6'/%3E%3C/svg%3E%0A")`
                  }}
                />

                <p className="mb-6 pb-0.5 leading-6">{price.tagline}</p>

                <Button
                  className="w-full"
                  href="#"
                  icon={{
                    element: ChevronRight,
                    position: 'right'
                  }}
                >
                  Start your free trial
                </Button>

                <div
                  className="relative z-0 mt-7 rounded-2xl border border-white/[0.04] px-4 py-5"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(-45deg, rgba(128, 128, 135, 0.03) 0, rgba(128, 128, 135, 0.03) 1.5px, transparent 0, transparent 50%)',
                    backgroundSize: '4px 4px'
                  }}
                >
                  <p className="mb-4 pb-0.5 text-sm text-white/50">What&lsquo;s included:</p>
                  <ul className="text-base font-medium leading-[2.125] -tracking-[0.5px]">
                    {price.included.map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="shrink-0 text-primary" />
                        <p className="[&_span]:text-primary [&_span]:underline">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {price.remaining && (
                  <>
                    <div>
                      <p className="absolute right-6 top-[18px] z-10 flex h-7 w-fit items-center justify-center rounded-full border border-primary/30 px-2.5 text-sm font-medium text-primary">
                        Only {price.remaining} left!
                        {price.highlighted && (
                          <>
                            <span className="absolute left-0 top-px -z-10 block h-[26px] w-full rounded-[100%] bg-[#FF5F5F]/35 mix-blend-plus-lighter blur-[18px]" />
                            <span className="absolute left-0 top-px -z-10 block h-[26px] w-full rounded-[100%] bg-[#FF5F5F]/35 mix-blend-plus-lighter blur-[18px]" />
                          </>
                        )}
                      </p>
                    </div>
                  </>
                )}

                {price.highlighted && (
                  <>
                    <RecShape className="pointer-events-none absolute left-0 top-0 -z-10 w-full" />
                    <div className="pointer-events-none absolute left-0 top-0 -z-10 size-16 rounded-full bg-[#FF5757] blur-[200px]" />
                    <div className="pointer-events-none absolute right-0 top-0 -z-10 size-16 rounded-full bg-[#FF5757] blur-[200px]" />
                    <div className="pointer-events-none absolute bottom-0 left-0 -z-10 size-16 rounded-full bg-[#FF5757] blur-[200px]" />
                    <div className="pointer-events-none absolute bottom-0 right-0 -z-10 size-16 rounded-full bg-[#FF5757] blur-[200px]" />
                  </>
                )}
              </div>
            ))}
          </div>
          <DotCircles className="pointer-events-none absolute -left-16 -top-11 -z-10" />
          <DotCircles className="pointer-events-none absolute -right-16 -top-11 -z-10 rotate-90" />
          <DotCircles className="pointer-events-none absolute -bottom-11 -left-16 -z-10 -rotate-90" />
          <DotCircles className="pointer-events-none absolute -bottom-11 -right-16 -z-10 rotate-180" />
        </div>
      </div>
    </section>
  );
}
