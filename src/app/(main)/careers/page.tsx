import type { Metadata } from 'next';
import CareersClient from './CareersClient';

export const metadata: Metadata = {
  title: 'Careers at Flyrlink',
  description: 'Join Flyrlink and help build the simplest way to find a verified expert. Open roles in Engineering, Design, Marketing, and more.',
  keywords: 'careers, jobs, hiring, engineering, product design, marketing, customer success, flyrlink careers, marketplace jobs, remote work',
  openGraph: {
    title: 'Careers at Flyrlink',
    description: 'Join Flyrlink and help build the simplest way to find a verified expert.',
    url: 'https://flyrlink.com/careers',
    type: 'website',
    images: [
      {
        url: 'https://flyrlink.com/og-careers.jpg',
        width: 1200,
        height: 630,
        alt: 'Flyrlink Careers',
      },
    ],
  },
};

export default function CareersPage() {
  return (
    <div>
      {/* JSON-LD Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Flyrlink',
            url: 'https://flyrlink.com',
            logo: 'https://flyrlink.com/logo.png',
            description: 'Marketplace to find and book verified experts across 12 categories. From yoga trainers to tax consultants, all in one app.',
            sameAs: [
              'https://www.linkedin.com/company/flyrlink',
              'https://twitter.com/flyrlink',
            ],
            jobLocation: [
              {
                '@type': 'Place',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Unit 407 Jain Sadguru Image Capital Park',
                  addressLocality: 'Hyderabad',
                  addressRegion: 'TG',
                  postalCode: '500081',
                  addressCountry: 'IN',
                },
              },
            ],
          }),
        }}
      />

      {/* Render Client Component */}
      <CareersClient />
    </div>
  );
}
