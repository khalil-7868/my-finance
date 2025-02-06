import { ElementType, ReactEventHandler, ReactNode } from 'react';

import Link from 'next/link';

import { cn } from 'lib/utils';

interface Props {
  varient?: 'default' | 'outline';
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: ReactEventHandler;
  outlineAnimation?: boolean;
  size?: 'sm' | 'md' | 'lg';
  icon?: {
    position: 'left' | 'right';
    element: ElementType;
  };
}

const buttonVariants = {
  default: 'bg-primary text-white border-white/20 border-[0.5px] shadow-btn',
  outline: 'bg-white/[0.02] border border-white/[0.04] gap-4 text-light-1 shadow-btn-outline'
};

const buttonSize = {
  sm: 'rounded-lg',
  md: 'py-2 px-3 text-sm font-medium leading-6 rounded-lg',
  lg: 'rounded-lg'
};

export function Button(props: Props) {
  const { onClick, varient = 'default', size = 'md', href, children, className, icon } = props;

  if (href)
    return (
      <Link
        onClick={onClick}
        className={cn(
          'relative z-0 flex w-fit items-center justify-center gap-[9px]',
          buttonVariants[varient],
          buttonSize[size],
          className
        )}
        href={href}
      >
        <span>{children}</span>
        {icon && (
          <icon.element
            className={cn(
              'size-3',
              icon.position === 'left' && 'order-first',
              icon.position === 'right' && 'order-last'
            )}
          />
        )}
      </Link>
    );

  return (
    <button
      onClick={onClick}
      className={cn(
        'relative z-0 flex w-fit items-center justify-center gap-[9px]',
        buttonVariants[varient],
        buttonSize[size],
        className
      )}
    >
      <span>{children}</span>
      {icon && (
        <icon.element
          className={cn(
            'size-3',
            icon.position === 'left' && 'order-first',
            icon.position === 'right' && 'order-last'
          )}
        />
      )}
    </button>
  );
}
