/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        lg: '2.5rem'
      }
    },
    boxShadow: {
      btn: 'inset 0px -6px 16px -0.5px rgba(255, 255, 255, 0.12)',
      'btn-outline': 'inset 0px -9px 22.9px -14px rgba(255, 255, 255, 0.25)'
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#DB3937'
        },
        dark: {
          DEFAULT: '#080812'
        },
        light: {
          DEFAULT: '#9C9FB2',
          1: '#F3F3F4'
        }
      },
      spacing: {
        15: '60px'
      },
      fontFamily: {
        serif: ['var(--font-britti-sans)', ...fontFamily.sans],
        sans: ['var(--font-inter)', ...fontFamily.sans]
      }
    }
  }
  // plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
