import type { Metadata } from 'next';
import CareersClient from './CareersClient';

export const metadata: Metadata = {
  title: 'Careers at Flyrlink',
  description: 'Join Flyrlink\'s team and help build the future of AI-powered expert networking. Explore open positions in Engineering, Design, Marketing, and more.',
  keywords: 'careers, jobs, hiring, engineering, product design, marketing, customer success, flyrlink careers, professional networking jobs, remote work',
  openGraph: {
    title: 'Careers at Flyrlink',
    description: 'Join our team and shape the future of professional networking with AI-powered matching and collaboration.',
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
            description: 'AI-powered expert network platform connecting professionals with users for seamless service bookings and expertise sharing',
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
