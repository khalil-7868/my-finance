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
import hero_demo from './hero-demo.png';
import { LineShapes } from './line-shapes';

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
  return (
    <section className="relative z-0 overflow-hidden pb-40 pt-20">
      <div className="mx-auto w-full max-w-[1120px]">
        <div className="mx-auto mb-15 w-full max-w-[744px]">
          <Badge icon={{ position: 'left', element: Stars }} center>
            All Finances in one place
          </Badge>
          <H1 className="mb-4 mt-3 text-center">Manage Finances, Plan Future, Build Wealth</H1>
          <Text className="mx-auto mb-10 max-w-[568px] text-center">
            Effortlessly manage your money, plan ahead with confidence, and grow your wealth using
            smart, intuitive tools—all in one secure platform.
          </Text>
          <Button className="mx-auto" href="#" icon={{ position: 'right', element: ChevronRight }}>
            Take control of your money
          </Button>
        </div>

        <div className="h-[593px] w-full rounded-2xl border border-white/[0.08] bg-dark/[0.43] backdrop-blur-[84px]">
          <Image src={hero_demo} alt="Dashboard" className="w-full object-cover" />
        </div>
      </div>
      <Image
        priority
        fetchPriority="high"
        src={bgshapes}
        alt="Shapes"
        className="pointer-events-none absolute left-1/2 top-[74px] -z-20 -translate-x-1/2"
      />

      <div className="relative z-0">
        <LineShapes className="pointer-evednts-none left-0 -mt-[97px] w-full " />

        <div className="mx-auto -mt-2.5 grid max-w-[1116px] grid-cols-3 gap-[25px]">
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
