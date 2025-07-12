import React from 'react';

interface AIOptimizedContentProps {
  children: React.ReactNode;
  semanticRole?: string;
  importance?: 'primary' | 'secondary' | 'tertiary';
}

export const AIOptimizedContent: React.FC<AIOptimizedContentProps> = ({ 
  children, 
  semanticRole = 'content',
  importance = 'secondary' 
}) => {
  const importanceClassMap = {
    primary: 'ai-content-primary',
    secondary: 'ai-content-secondary',
    tertiary: 'ai-content-tertiary'
  };

  return (
    <div 
      className={`ai-optimized-content ${importanceClassMap[importance]}`}
      data-semantic-role={semanticRole}
      data-ai-content="true"
      data-importance={importance}
    >
      {children}
    </div>
  );
};

export const AIContentSection: React.FC<{ 
  title: string;
  description: string;
  children: React.ReactNode;
  semanticType?: string;
}> = ({ title, description, children, semanticType = 'section' }) => {
  return (
    <section 
      className="ai-content-section"
      data-semantic-type={semanticType}
      aria-label={title}
    >
      <header className="ai-section-header">
        <h2 className="ai-section-title" data-ai-title="true">{title}</h2>
        <p className="ai-section-description" data-ai-description="true">{description}</p>
      </header>
      <div className="ai-section-content">
        {children}
      </div>
    </section>
  );
};

export const AIKeywordsList: React.FC<{ keywords: string[] }> = ({ keywords }) => {
  return (
    <div className="ai-keywords-container" data-ai-keywords="true">
      <span className="sr-only">Related topics and keywords:</span>
      <ul className="ai-keywords-list">
        {keywords.map((keyword, index) => (
          <li key={index} className="ai-keyword-item" data-keyword={keyword}>
            {keyword}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const AIFAQItem: React.FC<{ 
  question: string;
  answer: string;
}> = ({ question, answer }) => {
  return (
    <div 
      className="ai-faq-item" 
      itemScope 
      itemType="https://schema.org/Question"
      data-ai-faq="true"
    >
      <h3 className="ai-faq-question" itemProp="name" data-ai-question="true">
        {question}
      </h3>
      <div 
        className="ai-faq-answer" 
        itemScope 
        itemType="https://schema.org/Answer" 
        itemProp="acceptedAnswer"
        data-ai-answer="true"
      >
        <p itemProp="text">{answer}</p>
      </div>
    </div>
  );
};

export const AIStructuredData: React.FC<{ data: object }> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};