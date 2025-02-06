import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

import { cn } from 'lib/utils';

import { Footer } from 'components/sections/footer';
import { Header } from 'components/sections/header';

import './globals.css';

const britti_sans = localFont({
  src: 'fonts/britti-sans-variable.ttf',
  variable: '--font-britti-sans'
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter'
});

export const metadata = {
  title: 'My Fiance',
  description:
    'Effortlessly manage your money, plan ahead with confidence, and grow your wealth using smart, intuitive tools—all in one secure platform.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(britti_sans.variable, inter.variable)}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
