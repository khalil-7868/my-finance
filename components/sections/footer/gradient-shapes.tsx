import * as React from 'react';
import { SVGProps } from 'react';

export const GradientShapes = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={1438}
    height={418}
    viewBox="0 0 1438 418"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      style={{
        mixBlendMode: 'plus-lighter'
      }}
      filter="url(#filter0_f_2043_21)"
    >
      <ellipse cx={486} cy={545.5} rx={485} ry={195.5} fill="url(#paint0_linear_2043_21)" />
    </g>
    <g
      style={{
        mixBlendMode: 'plus-lighter'
      }}
      filter="url(#filter1_f_2043_21)"
    >
      <ellipse cx={943.5} cy={545.5} rx={494.5} ry={195.5} fill="url(#paint1_linear_2043_21)" />
    </g>
    <defs>
      <filter
        id="filter0_f_2043_21"
        x={-349}
        y={0}
        width={1670}
        height={1091}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation={175} result="effect1_foregroundBlur_2043_21" />
      </filter>
      <filter
        id="filter1_f_2043_21"
        x={99}
        y={0}
        width={1689}
        height={1091}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation={175} result="effect1_foregroundBlur_2043_21" />
      </filter>
      <linearGradient
        id="paint0_linear_2043_21"
        x1={30.5861}
        y1={523.774}
        x2={784.029}
        y2={523.774}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.0106586} stopColor="#DA3637" stopOpacity={0} />
        <stop offset={0.466973} stopColor="#DA3637" />
        <stop offset={1} stopColor="#DA368F" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_2043_21"
        x1={479.166}
        y1={523.774}
        x2={1247.37}
        y2={523.774}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.0106586} stopColor="#DA3637" stopOpacity={0} />
        <stop offset={0.466973} stopColor="#DA3637" />
        <stop offset={1} stopColor="#DA3637" />
      </linearGradient>
    </defs>
  </svg>
);
