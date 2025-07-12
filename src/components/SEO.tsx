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
  title: 'Flyrlink - AI-Powered Expert Network',
  description: 'Connect with verified professionals using AI-powered matching technology. Find the right expert instantly.',
  image: 'https://flyrlink.com/og-image.jpg',
  url: 'https://flyrlink.com',
  type: 'website',
  keywords: 'expert network, AI matching, professional consulting, expert marketplace, knowledge sharing, business expertise, consultant finder, expert advice',
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
    '@type': 'Organization',
    name: 'Flyrlink',
    description: defaultSEO.description,
    url: defaultSEO.url,
    logo: seoImage,
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