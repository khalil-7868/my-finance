import { ReactNode } from 'react';

import { cn } from 'lib/utils';

interface Props {
  children: ReactNode;
  className?: string;
}

interface TextProps {
  children: ReactNode;
  className?: string;
  size?: 'small' | 'medium';
}

export function H1({ children, className }: Props) {
  return (
    <h1
      className={cn(
        'bg-cover bg-clip-text bg-center bg-no-repeat text-[64px] font-bold leading-[1.125] -tracking-[0.96px] text-transparent',
        className
      )}
      style={{ backgroundImage: 'linear-gradient(180deg, #DDDDE5 0%, #C7C7D3 100%)' }}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className }: Props) {
  return (
    <h2
      className={cn(
        'bg-cover bg-clip-text bg-center bg-no-repeat text-5xl font-semibold leading-[1.1] -tracking-[1.92px] text-transparent',
        className
      )}
      style={{ backgroundImage: 'linear-gradient(180deg, #DDDDE5 0%, #C7C7D3 100%)' }}
    >
      {children}
    </h2>
  );
}

export function Text({ children, className, size = 'medium' }: TextProps) {
  return (
    <p
      className={cn(
        'text-light opacity-95',
        size === 'medium' && 'text-base leading-[1.56] -tracking-[0.5px]',
        size === 'small' && 'text-sm leading-[1.6429]',
        className
      )}
    >
      {children}
    </p>
  );
}
