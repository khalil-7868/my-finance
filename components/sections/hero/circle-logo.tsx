import * as React from 'react';
import { SVGProps } from 'react';

export const CircleLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={84}
    height={84}
    viewBox="0 0 84 84"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={42} cy={42} r={41.5} stroke="url(#paint0_angular_8_2)" />
    <g filter="url(#filter0_i_8_2)">
      <rect x={6} y={6} width={72} height={72} rx={36} fill="url(#paint1_linear_8_2)" />
      <rect
        x={6.25}
        y={6.25}
        width={71.5}
        height={71.5}
        rx={35.75}
        stroke="white"
        strokeOpacity={0.2}
        strokeWidth={0.5}
      />
      <path
        d="M57.9998 58.0002V25.9773H50.3944L45.5909 32.3819L40.7875 38.7865L35.5838 45.191H43.1892L51.9955 33.983L51.5952 58.0002H57.9998Z"
        fill="white"
      />
      <path
        d="M25.9767 25.9773V58.0002H32.3812V45.191H35.5835L40.7872 38.7865H32.3812V32.3819H45.5907L50.3941 25.9773H25.9767Z"
        fill="white"
        fillOpacity={0.4}
      />
    </g>
    <defs>
      <filter
        id="filter0_i_8_2"
        x={6}
        y={0}
        width={72}
        height={78}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius={0.5}
          operator="dilate"
          in="SourceAlpha"
          result="effect1_innerShadow_8_2"
        />
        <feOffset dy={-6} />
        <feGaussianBlur stdDeviation={8} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_8_2" />
      </filter>
      <radialGradient
        id="paint0_angular_8_2"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(42 42) rotate(-90) scale(33.5)"
      >
        <stop stopColor="#F85250" />
        <stop offset={0.449498} stopColor="#F85250" stopOpacity={0} />
        <stop offset={1} stopColor="#F85250" stopOpacity={0} />
      </radialGradient>
      <linearGradient
        id="paint1_linear_8_2"
        x1={42}
        y1={6}
        x2={42}
        y2={78}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DB3937" />
        <stop offset={1} stopColor="#A80C0A" />
      </linearGradient>
    </defs>
  </svg>
);
