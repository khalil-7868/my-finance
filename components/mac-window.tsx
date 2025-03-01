import { ReactNode } from 'react';

import { cn } from 'lib/utils';

import { SVGBorder } from './svg-border';

interface Props {
  className?: string;
  //   width?: number | string;
  //   height?: number | string;
  children: ReactNode;
}

export function MacWindow(props: Props) {
  return (
    <SVGBorder
      borderGradient={['#ffffff14', 'transparent']}
      borderGradientDirection="to bottom"
      borderRadius={20}
      className={cn(props.className)}
    >
      <div className="rounded-[20px] bg-linear-to-b from-white/[0.03] to-transparent p-1">
        <SVGBorder
          borderGradient={['#ffffff14', 'transparent']}
          borderGradientDirection="to bottom"
          borderRadius={16}
        >
          <div className={'rounded-2xl'}>
            <div className="flex h-[27px] items-center gap-[3px] border-b border-[#21212A] px-[9px]">
              <span className="size-2 shrink-0 rounded-full border border-white/[0.07] bg-white/[0.08]"></span>
              <span className="size-2 shrink-0 rounded-full border border-white/[0.07] bg-white/[0.08]"></span>
              <span className="size-2 shrink-0 rounded-full border border-white/[0.07] bg-white/[0.08]"></span>
            </div>

            {props.children}
          </div>
        </SVGBorder>
      </div>
    </SVGBorder>
  );
}
