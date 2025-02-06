import { Cta } from 'components/sections/cta';
import { Hero } from 'components/sections/hero';
import { OurCertifications } from 'components/sections/our-certifications';
import { OurFeatures } from 'components/sections/our-features';
import { Pricing } from 'components/sections/pricing';
import { Reviews } from 'components/sections/reviews';

export const metadata: Metadata = {
  title: 'Home',
  datePublished: '1/1/2023',
  breadcrumbs: [{ name: 'Home', href: '/' }]
};

export default function Home() {
  return (
    <main>
      {/* <Hero />
      <OurFeatures />
      <OurCertifications /> */}
      <Pricing />
      <Reviews />
      <Cta />
    </main>
  );
}
