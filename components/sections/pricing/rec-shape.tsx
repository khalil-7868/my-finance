import { SVGProps } from 'react';

export const RecShape = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={397}
    height={462}
    viewBox="0 0 397 462"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g opacity={0.32} filter="url(#filter0_f_25_19368)">
      <path d="M-52 337L52.4703 -50H351.635L450 337H-52Z" fill="url(#paint0_linear_25_19368)" />
    </g>
    <defs>
      <filter
        id="filter0_f_25_19368"
        x={-177}
        y={-175}
        width={752}
        height={637}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation={62.5} result="effect1_foregroundBlur_25_19368" />
      </filter>
      <linearGradient
        id="paint0_linear_25_19368"
        x1={199}
        y1={-50}
        x2={199}
        y2={337}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A74474" />
        <stop offset={1} stopColor="#0C0B19" />
      </linearGradient>
    </defs>
  </svg>
);
