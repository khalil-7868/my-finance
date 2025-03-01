import Image from 'next/image';

import { ChevronRight } from 'components/icons/chevron-right';
import { GridLayout } from 'components/icons/grid-layout';
import { SVGBorder } from 'components/svg-border';
import { H1, Text } from 'components/typography';
import { Badge } from 'components/ui/Badge';
import { Button } from 'components/ui/Button';

import { BGBoxes } from './bg-boxes';
import money_bg from './box-grid.png';
import gradient from './gradient.png';

export function Cta() {
  return (
    <section className="overflow-hidden pb-40">
      <div className="relative z-0 mx-auto w-full max-w-[1120px] border border-white/[0.08] bg-[#080812] md:rounded-2xl">
        <div className="pb-10 pt-24 md:pb-[54px] md:pt-15">
          <div className="relative z-0 mx-auto w-full max-w-[732px]">
            <Badge
              className="mb-3 ml-1 hidden h-[25px] items-center gap-2 rounded-sm bg-white/[0.04] px-1.5 text-xs tracking-[0.02em] text-white md:flex"
              icon={{ element: GridLayout, position: 'left' }}
            >
              The place for your finances
            </Badge>
            <SVGBorder
              borderWidth={0.31}
              className="w-full"
              borderGradientDirection="to bottom"
              borderGradient={['#ffffff30', '#ffffff00']}
            >
              <div className="mx-auto w-full max-w-[595px] px-4 pt-3 text-center md:px-0">
                <Badge className="mx-auto mb-9 h-[22px] text-xs tracking-[0.09em] text-white md:mb-5">
                  My-Finance
                </Badge>
                <H1 className="mb-4 -tracking-[1.92px]">
                  Start your{' '}
                  <span className="relative z-0 px-1 pb-0.5 pt-1.5">
                    <span className="bg-linear-to-r from-[#DB3738] via-[#DB3768] to-[#DB3768] bg-clip-text text-transparent">
                      money
                    </span>
                    <Image
                      src={money_bg}
                      alt="bg"
                      className="pointer-events-none absolute left-0 top-0 -z-10 object-cover opacity-40"
                    />
                  </span>{' '}
                  management journey
                </H1>
                <Text className="mb-10">
                  Effortlessly manage your money, plan ahead with confidence, and grow your wealth
                  using smart, intuitive tools—all in one secure platform.
                </Text>
                <Button icon={{ element: ChevronRight, position: 'right' }} className="mx-auto">
                  Take control of your money
                </Button>
              </div>
            </SVGBorder>
            <p className="absolute -left-10 top-20 hidden w-fit origin-bottom -rotate-90 text-xs tracking-[0.09em] text-[#363A4C] md:block">
              666 x 324
            </p>
          </div>
        </div>

        <BGBoxes className="pointer-events-none absolute -right-3/4 top-0 -z-10 md:left-0 md:w-full" />
        <Image
          src={gradient}
          alt="Gradient"
          className="pointer-events-none absolute left-1/2 top-0 -z-20 mx-auto w-full max-w-[695px] origin-top -translate-x-2/3 scale-2 md:-translate-x-1/2 md:scale-100"
        />
      </div>
    </section>
  );
}
