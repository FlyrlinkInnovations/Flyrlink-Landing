import type { Metadata } from 'next';
import LegalPage, { type LegalBlock } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'How Flyrlink uses cookies, web beacons, and similar technologies on our Website and mobile application.',
};

const blocks: LegalBlock[] = [
  {
    type: 'p',
    text: 'The information provided hereinbelow details how the Company and its affiliates ("we"/"us"/"our") use cookies, web-beacons and similar technologies on its Website and mobile application. Cookies may be placed and used on some parts of our website and mobile applications. A cookie is a small text file containing small amounts of information which is downloaded to your computer or mobile device that assists us in providing a more customised website experience. Cookies managed by us are referred to as "first party cookies" whereas cookies from third parties are referred to as "third party cookies".',
  },
  {
    type: 'p',
    text: 'Cookies help us in improving your browsing experience by storing your preferences, ensuring the content matches with your expectations and negating the need to re-enter User data again in the next visit. Furthermore, cookies aid in analysing the utilization of our website and online content (analytics cookies) and can also streamline or monitor interactions on our websites and online content with social media (such as links to social media platforms, like buttons, etc.).',
  },
  {
    type: 'p',
    text: 'Cookies are primarily employed to enrich the online experience of visitors and are not utilized to monitor the browsing behaviours of identified visitors unless we receive explicit and prior written consent from the visitor. Should a visitor have concerns regarding cookies, we allow individuals to reject or deny them.',
  },
  {
    type: 'p',
    text: 'Typically, a visitor can reject or decline a cookie and still navigate our websites fully; however, certain site functionalities may be affected. You can choose your desired cookie settings through our consent manager and in case you wish to deny undesired cookies, you can do this using the options available in your cookie settings. Please bear in mind that deleting and blocking cookies affects your User experience.',
  },

  { type: 'h2', text: 'Types of cookies used' },
  {
    type: 'p',
    text: 'The cookies used on our website have been categorized as stated below. This categorization and content therein, may vary depending on jurisdiction, Applicable Laws or IT setup in certain jurisdictions.',
  },

  { type: 'h3', text: 'Necessary Cookies' },
  {
    type: 'p',
    text: 'Also referred to as essential cookies or strictly necessary cookies, are needed for functioning of a website or web-application which may include navigation, access to secure areas of website and User authentication.',
  },

  { type: 'h3', text: 'Functional Cookies' },
  {
    type: 'p',
    text: "These cookies are used to enhance functionality and usability of the website for the Users and are considered essential for providing specific features and services requested by the Users. For example, functional cookies may remember a User's language preference, font size selection, or region-specific settings, ensuring that the website is displayed according to the User's preferences each time they visit. These cookies do not have the capability to monitor your browsing activity on external websites. They do not collect any data about you that could be utilized for advertising purposes or to recall your internet browsing history beyond our website.",
  },

  { type: 'h3', text: 'Performance Cookies' },
  {
    type: 'p',
    text: "Performance cookies are typically used by website owners and developers to optimize the design and content of the site, identify and fix usability issues, and measure the effectiveness of marketing campaigns. By analysing the data collected by performance cookies, we can make informed decisions about how to enhance the User experience and drive engagement. These cookies don't collect information that identifies a visitor.",
  },

  { type: 'h3', text: 'Analytics Cookies' },
  {
    type: 'p',
    text: "First-party analytics cookies are a type of cookie that collects data about how Users interact with our website. These cookies are used to analyse and measure various aspects of website performance, such as the number of visitors, pages visited, time spent on each page, and User engagement. These cookies do not gather data that can pinpoint a visitor's identity at an individual level, as such information is not accessible to us. Additionally, these cookies do not transmit personally identifiable information to any external third party, except in specific instances where we enlist a service provider to assist us, under strict conditions where they are unable to utilize the data for their own purposes.",
  },

  { type: 'h3', text: 'Marketing Cookies' },
  {
    type: 'p',
    text: 'Marketing cookies are a type of cookies that collect data regarding User requirements and deliver personalized advertisements. The data collected by marketing cookies allows us to customize our marketing and advertising content based on your interests and evaluate the effectiveness of our content with your interests and needs. The information so collected may be shared with third parties, including our advertising and marketing partners and agencies, to ensure that targeted ads, personalized to you, are shared with you.',
  },

  {
    type: 'p',
    text: 'If you have any questions regarding our cookies or cookie policy, please submit details in our request form or write to us at support@flyrlink.com.',
  },
];

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      effectiveDate="April 5, 2026"
      blocks={blocks}
    />
  );
}
