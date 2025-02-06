import { ElementType, ReactNode } from 'react';

import { cn } from 'lib/utils';

interface Props {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  center?: boolean;
  icon?: {
    position: 'left' | 'right';
    element: ElementType;
  };
}

export function Badge(props: Props) {
  const { children, className, as: Tag = 'p', icon, center } = props;
  return (
    <Tag
      className={cn(
        'flex w-fit items-center justify-center gap-1 rounded-[56px] border border-white/[0.11] bg-white/[0.06] px-3 py-1.5 text-sm font-medium leading-5',
        center && 'mx-auto',
        className
      )}
    >
      <span>{children}</span>
      {icon && (
        <icon.element
          className={cn(
            icon.position === 'left' && 'order-first',
            icon.position === 'right' && 'order-last'
          )}
        />
      )}
    </Tag>
  );
}
