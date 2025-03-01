import Image from 'next/image';

import { SVGBorder } from 'components/svg-border';
import { H2, Text } from 'components/typography';

import { CertificationShape } from './certification-shape';
import { CertificationShapeMobile } from './certification-shape-mobile';
import fox_certificate from './fox-certification.png';
import green_electricity from './green-electricity.png';
import psd2 from './psd2.png';

const certificates = [
  {
    image: green_electricity,
    label: '100% green electricity'
  },
  {
    image: fox_certificate,
    label: 'FOX certification ISO/IEC 27001:2013'
  },
  {
    image: psd2,
    label: 'FOX certification ISO/IEC 27001:2013'
  }
];

export function OurCertifications() {
  return (
    <section className="relative z-0 overflow-hidden px-5 pt-5">
      {/* Content */}
      <div className="mx-auto w-full max-w-[1120px]">
        {/* Header */}
        <CertificationShape className="pointer-events-none mx-auto -mb-[4.5rem] hidden w-full md:block lg:w-fit" />
        <CertificationShapeMobile className="pointer-events-none mx-auto -mb-6 w-full scale-110 md:hidden" />
        <div className="mx-auto mb-15 w-full max-w-[598px] text-center">
          <H2>Our certifications</H2>
          <Text className="mt-4">
            Our certifications confirm the quality and reliability of our offerings, while our
            hosting in Germany keeps your sensitive data in safe hands. Invest in your future with
            peace of mind - with us, your finances are in the best hands.
          </Text>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <SVGBorder
              key={index}
              borderRadius={12}
              borderGradient={['#ffffff14', '#ffffff08']}
              borderGradientDirection="to bottom"
            >
              <div className="relative z-0 flex items-center gap-6 overflow-hidden rounded-xl px-6 py-5">
                <Image
                  src={certificate.image}
                  alt={certificate.label}
                  className="h-[74px] w-fit object-contain"
                />
                <p className="text-balance -tracking-[0.5px]">{certificate.label}</p>
                <div className="pointer-events-none absolute -inset-20 -z-10 bg-white/[0.02] blur-sm" />
              </div>
            </SVGBorder>
          ))}
        </div>
      </div>
    </section>
  );
}
