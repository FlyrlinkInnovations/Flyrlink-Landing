import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { Providers } from '@/components/providers';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: {
    default: 'Flyrlink: Find a Coach, Tutor, Designer or Expert. Book in Minutes.',
    template: '%s | Flyrlink',
  },
  description:
    'Find verified experts on Flyrlink. From yoga trainers to tax consultants, book 1:1 sessions in minutes. 89+ services, 12 categories, real ratings.',
  keywords: [
    'find an expert',
    'book a coach',
    'hire a tutor',
    'yoga trainer near me',
    'logo designer',
    'tax consultant',
    'online tutor',
    'fitness coach',
    'verified experts',
    'expert marketplace',
    'Flyrlink',
  ],
  metadataBase: new URL('https://flyrlink.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://flyrlink.com',
    siteName: 'Flyrlink',
    title: 'Flyrlink: Find a Coach, Tutor, Designer or Expert',
    description:
      'Book verified pros in minutes. From yoga trainers to tax consultants, real ratings, free chat before you book.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@flyrlink',
    title: 'Flyrlink: Find a Coach, Tutor, Designer or Expert',
    description:
      'Book verified pros in minutes. From yoga trainers to tax consultants, real ratings, free chat before you book.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'Flyrlink',
        url: 'https://flyrlink.com',
        logo: 'https://flyrlink.com/logo.png',
        description:
          'Marketplace to find and book verified experts. From yoga trainers and tutors to designers and consultants, all in one app.',
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          email: 'Contact@flyrlink.com',
          availableLanguage: ['English'],
        },
        sameAs: [
          'https://www.linkedin.com/company/flyrlink-innovations/',
          'https://twitter.com/flyrlink',
          'https://www.instagram.com/flyrlink/',
          'https://www.facebook.com/profile.php?id=61574439102498',
        ],
      },
      {
        '@type': 'WebSite',
        name: 'Flyrlink',
        url: 'https://flyrlink.com',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://app.flyrlink.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'WebApplication',
        name: 'Flyrlink',
        url: 'https://app.flyrlink.com',
        applicationCategory: 'LifestyleApplication',
        operatingSystem: 'Web',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${jakarta.variable} font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
