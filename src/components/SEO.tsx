import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  canonical?: string;
  jsonLd?: object;
}

const defaultSEO = {
  title: 'Flyrlink - AI-Powered Expert Network | Connect with Verified Professionals',
  description: 'Flyrlink is an AI-powered expert network connecting you with verified professionals across diverse fields. Get instant expert advice for business, career, learning, and more. Join our intelligent platform for personalized expert matching.',
  image: 'https://flyrlink.com/og-image.jpg',
  url: 'https://flyrlink.com',
  type: 'website',
  keywords: 'AI expert network, verified professionals, expert marketplace, business consulting, career mentorship, AI matching, professional advice, expert consultation, knowledge sharing, online learning, startup mentorship, business expertise, consultant finder, expert advice, professional network India',
  author: 'Flyrlink',
};

export function SEO({
  title,
  description,
  image,
  url,
  type = 'website',
  keywords,
  author,
  publishedTime,
  modifiedTime,
  section,
  tags,
  noindex = false,
  canonical,
  jsonLd,
}: SEOProps) {
  const seoTitle = title ? `${title} | Flyrlink` : defaultSEO.title;
  const seoDescription = description || defaultSEO.description;
  const seoImage = image || defaultSEO.image;
  const seoUrl = url || defaultSEO.url;
  const seoKeywords = keywords || defaultSEO.keywords;
  const seoAuthor = author || defaultSEO.author;

  const structuredData = jsonLd || {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://flyrlink.com/#organization',
        name: 'Flyrlink',
        description: defaultSEO.description,
        url: defaultSEO.url,
        logo: {
          '@type': 'ImageObject',
          url: seoImage,
          width: 1200,
          height: 630
        },
        sameAs: [
          'https://twitter.com/flyrlink',
          'https://linkedin.com/company/flyrlink',
        ],
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://flyrlink.com/find-experts?q={search_term_string}'
          },
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'WebSite',
        '@id': 'https://flyrlink.com/#website',
        url: 'https://flyrlink.com',
        name: 'Flyrlink - AI-Powered Expert Network',
        description: defaultSEO.description,
        publisher: {
          '@id': 'https://flyrlink.com/#organization'
        },
        inLanguage: 'en-US'
      },
      {
        '@type': 'WebPage',
        '@id': seoUrl + '#webpage',
        url: seoUrl,
        name: seoTitle,
        description: seoDescription,
        isPartOf: {
          '@id': 'https://flyrlink.com/#website'
        },
        about: {
          '@id': 'https://flyrlink.com/#organization'
        },
        inLanguage: 'en-US'
      },
      {
        '@type': 'Service',
        '@id': 'https://flyrlink.com/#service',
        name: 'AI-Powered Expert Matching Service',
        description: 'Connect with verified professionals using advanced AI matching algorithms',
        provider: {
          '@id': 'https://flyrlink.com/#organization'
        },
        serviceType: 'Professional Consultation & Expert Network',
        areaServed: {
          '@type': 'Country',
          name: 'India'
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Expert Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Business Consulting'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Career Mentorship'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Educational Tutoring'
              }
            }
          ]
        }
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://flyrlink.com/#application',
        name: 'Flyrlink Platform',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, iOS, Android',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR'
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          ratingCount: '1250'
        }
      }
    ]
  };

  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content={seoAuthor} />
      
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      {canonical && <link rel="canonical" href={canonical} />}
      
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:site_name" content="Flyrlink" />
      <meta property="og:locale" content="en_US" />
      
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags && tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@flyrlink" />
      <meta name="twitter:creator" content="@flyrlink" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      
      <meta name="linkedin:site" content="Flyrlink" />
      <meta name="linkedin:title" content={seoTitle} />
      <meta name="linkedin:description" content={seoDescription} />
      
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#3B82F6" />
      
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}