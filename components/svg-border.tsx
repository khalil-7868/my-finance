'use client';

import type React from 'react';
import { useEffect, useId, useRef, useState } from 'react';

type GradientDirection = 'to right' | 'to bottom' | 'to bottom right' | 'to top right';

interface SVGBorderProps {
  children: React.ReactNode;
  className?: string;
  borderColor?: string;
  fillGradient?: [string, string];
  borderGradient?: [string, string];
  fillGradientDirection?: GradientDirection;
  borderGradientDirection?: GradientDirection;
  borderRadius?: number;
  offset?: number;
  borderWidth?: number;
}

export const SVGBorder: React.FC<SVGBorderProps> = ({
  children,
  className = '',
  borderColor,
  fillGradient,
  borderGradient,
  fillGradientDirection = 'to bottom right',
  borderGradientDirection = 'to right',
  borderRadius = 0,
  borderWidth = 1,
  offset = 0
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (contentRef.current) {
        const { width, height } = contentRef.current.getBoundingClientRect();
        setDimensions({
          width: width + 2 * offset,
          height: height + 2 * offset
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, [offset]);

  const fillGradientId = useId();
  const borderGradientId = useId();

  const getGradientCoords = (direction: GradientDirection) => {
    switch (direction) {
      case 'to right':
        return { x1: '0%', y1: '0%', x2: '100%', y2: '0%' };
      case 'to bottom':
        return { x1: '0%', y1: '0%', x2: '0%', y2: '100%' };
      case 'to bottom right':
        return { x1: '0%', y1: '0%', x2: '100%', y2: '100%' };
      case 'to top right':
        return { x1: '0%', y1: '100%', x2: '100%', y2: '0%' };
    }
  };

  return (
    <div className={`relative inline-block ${className}`} style={{ padding: offset }}>
      <div ref={contentRef} className={`relative z-10 size-full `}>
        {children}
      </div>
      <svg
        className="pointer-events-none absolute left-0 top-0"
        width={dimensions.width}
        height={dimensions.height}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {fillGradient && (
            <linearGradient id={fillGradientId} {...getGradientCoords(fillGradientDirection)}>
              <stop offset="0%" stopColor={fillGradient[0]} />
              <stop offset="100%" stopColor={fillGradient[1]} />
            </linearGradient>
          )}
          {borderGradient && (
            <linearGradient id={borderGradientId} {...getGradientCoords(borderGradientDirection)}>
              <stop offset="0%" stopColor={borderGradient[0]} />
              <stop offset="100%" stopColor={borderGradient[1]} />
            </linearGradient>
          )}
        </defs>
        <rect
          x="0.5"
          y="0.5"
          width={Math.max(1, dimensions.width - 1)}
          height={Math.max(1, dimensions.height - 1)}
          fill={fillGradient ? `url(#${fillGradientId})` : 'none'}
          stroke={borderGradient ? `url(#${borderGradientId})` : borderColor || 'black'}
          strokeWidth={borderWidth}
          rx={borderRadius}
          ry={borderRadius}
        />
      </svg>
    </div>
  );
};
