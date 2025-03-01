import { cn } from 'lib/utils';

interface Props {
  className?: string;
  isOpen?: boolean;
}

export function Menu({ className, isOpen }: Props) {
  return (
    <div className={cn('relative z-10 flex h-3 w-3.5 flex-col justify-between', className)}>
      <span
        className={cn('block h-px w-full rounded-sm bg-white transition-transform duration-500', {
          'translate-y-[5.5px] rotate-[225deg]': isOpen
        })}
      ></span>
      <span
        className={cn('block h-px w-full rounded-sm bg-white transition-opacity duration-500', {
          'opacity-0': isOpen
        })}
      ></span>
      <span
        className={cn('block h-px w-full rounded-sm bg-white transition-transform duration-500', {
          '-translate-y-[5.5px] -rotate-[225deg]': isOpen
        })}
      ></span>
    </div>
  );
}
