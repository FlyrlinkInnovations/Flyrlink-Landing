import type { Metadata } from 'next';
import FaqClient from './FaqClient';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Find answers to common questions about Flyrlink. Learn about expert consultations, platform features, pricing, security, and how to connect with verified professionals.',
  keywords:
    'flyrlink faq, frequently asked questions, help center, expert platform questions, user guide, platform support, common questions, how to use flyrlink',
  openGraph: {
    title: 'Frequently Asked Questions | Flyrlink',
    description:
      'Find answers to common questions about Flyrlink. Learn about expert consultations, platform features, pricing, security, and how to connect with verified professionals.',
    url: 'https://flyrlink.com/faq',
    type: 'website',
    images: [
      {
        url: 'https://flyrlink.com/og-faq.jpg',
        width: 1200,
        height: 630,
        alt: 'Flyrlink FAQ',
      },
    ],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    // General Questions
    {
      '@type': 'Question',
      name: 'What is FLYRLINK, and how does it work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FLYRLINK is a professional networking and talent discovery platform where General Users, Experts, Startups, and Businesses can connect, collaborate, and grow. Experts can offer services, monetize content, and provide consultations, while startups and businesses can promote their services and gain expert support.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who can use FLYRLINK? Is it for individuals, businesses, or both?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FLYRLINK is designed for both individuals and businesses.\n\n• General Users can engage with expert content and seek professional guidance.\n• Experts & Freelancers can offer services, share knowledge, and monetize content.\n• Startups & Small Businesses can promote their services, connect with experts, and gain visibility.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is FLYRLINK available globally, or is it restricted to certain regions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Currently, FLYRLINK is available in India. A global release is planned soon, allowing users from different countries to join and benefit from the platform. Stay tuned for updates!',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I sign up and create a profile on FLYRLINK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "You can sign up using your email or social accounts. Once registered, complete your profile with skills, experience, and services, and if you're an expert, apply for verification to enhance trust and credibility.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is FLYRLINK free to use, or are there any charges?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FLYRLINK offers free access to all users. Experts can list their services for free, but for verification and premium features like priority listing and promotional ads, a customized pricing applies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use FLYRLINK for networking and connecting with other professionals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! FLYRLINK allows you to connect with experts, businesses, and professionals, engage in discussions, follow experts, and collaborate on projects or mentorship opportunities.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I search for experts, businesses, or services in FLYRLINK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use the search feature in the app to find verified experts, startups, and service providers based on category, location, or expertise. You can also check posts and video content in the feed for recommendations.',
      },
    },
    // User Role & Usage
    {
      '@type': 'Question',
      name: 'How do I create an account on FLYRLINK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Users can sign up with an email or social account, select User role and then complete their profile with basic details. Once registered, users can browse expert services, post content, and engage with the community.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I book a service appointment with an expert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Go to the expert's profile or service listing, select the desired service, choose an available date and time, and confirm the booking. The expert will receive a notification and can approve the appointment.",
      },
    },
    {
      '@type': 'Question',
      name: 'How can I pay for a service on FLYRLINK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Users can securely pay for services through the in-app payment system. Payment options may include credit/debit cards, UPI, or other supported digital payment methods.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can users post in the feed and upload videos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Users can post updates, share experiences, ask questions, and upload videos to engage with the community. However, monetization is available only for verified experts.',
      },
    },
    {
      '@type': 'Question',
      name: 'How old do I need to be to use FLYRLINK to book services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Users must be at least 18 years old to book services and make payments on FLYRLINK. Minors may use the platform under parental guidance for educational content.',
      },
    },
    // Expert Roles & Monetization
    {
      '@type': 'Question',
      name: 'How do I create an expert account on FLYRLINK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sign up using your email or social account, then select "Expert Profile" during setup. Complete your profile with skills, experience, and services offered. You can also apply for verification to increase trust and visibility.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I list my services on FLYRLINK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Go to your profile settings, select "Create a Service", and fill in details such as service title, description, pricing, and availability (online, in-person, home visit). Once listed, users can book your services directly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I set my own prices for services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Experts can define their own pricing based on market demand, expertise, and service quality. You can also offer discounted or free introductory sessions to attract new clients.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I earn money by uploading videos on FLYRLINK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Experts can upload high-quality videos such as tutorials, how-to guides, and industry insights. Earnings are based on video views, in-app ads, and engagement metrics (likes, comments, and shares).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I monetize blogs and written content?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Currently, FLYRLINK monetizes videos only. However, experts can use blog posts to gain visibility, attract clients, and promote their paid services.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the benefit of getting verified as an expert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A verified badge helps build trust with users, increases engagement, and improves visibility in searches. Verified experts also qualify for monetization and priority listing opportunities.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I increase my visibility as an expert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Post high-quality content (videos, blogs, discussions) regularly. Engage with users through comments, Q&A, and consultations. Apply for priority listing to feature your profile at the top.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get priority listing or sponsored ads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Experts looking for more exposure can apply for priority listing and sponsored ads by contacting the FLYRLINK team. These services help increase visibility and reach more users.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there an eligibility requirement to start earning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, experts must meet a minimum engagement threshold (favorites, video views, likes, comments, shares) before earning from their content. This ensures only high-quality content is monetized.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I offer both online and in-person services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Experts can specify whether they provide online sessions, in-person consultations, or home visits in their service listings. Users can book based on location and availability.',
      },
    },
    // Startup & Business Growth
    {
      '@type': 'Question',
      name: 'How can startups and small businesses use FLYRLINK to grow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Startups and small businesses can list their services, connect with verified experts, promote their brand through posts and videos, and engage with potential customers. They can also participate in Startup Saturday for extra visibility.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can startups collaborate with experts on FLYRLINK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Startups can hire experts for business consulting, mentorship, and marketing strategies. Verified experts can provide growth advice, funding guidance, and operational insights.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can startups increase their visibility on FLYRLINK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Post engaging content regularly (videos, insights, offers). Utilize priority listing & sponsored ads for better reach. Participate in Startup Saturday for promotional support. Offer free samples or introductory discounts to attract customers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can businesses sell products or services directly on FLYRLINK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Businesses can list services that users can book and pay for directly through the app. However, product sales are not currently supported, but businesses can use posts and videos to drive traffic to their offerings.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can startups apply for priority listing and sponsored ads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Startups and small businesses must contact the FLYRLINK team for customized sponsored posts and priority listing options to increase visibility and attract targeted customers. Contact the FLYRLINK team for advertising and top priority listings.',
      },
    },
    // Service Types & Offerings
    {
      '@type': 'Question',
      name: 'What types of services can experts offer on FLYRLINK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Experts can offer a variety of services, including: Online consultations (video calls, chat-based advice). In-person services (local meetups, office visits). Home visits (for business, consulting, coaching, or personal services).',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I offer services on FLYRLINK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Verified experts can create a service listing by going to their profile settings, selecting "Create a Service", and adding details such as service type, description, pricing, and availability (online, in-person, or home visit).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can experts create custom services based on user requirements?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Experts can offer tailor-made services based on client needs. Users can send service requests, and experts can customize the scope, duration, and pricing accordingly.',
      },
    },
    {
      '@type': 'Question',
      name: 'What payment options are available for booking services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Users can pay for services using multiple payment methods, including: Credit/Debit Cards, UPI, Net Banking, Cash Payments (for in-person or home visit services, based on expert preference).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can experts offer both free and paid services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Experts can offer free introductory services to attract clients, provide discounted services for a limited time, and charge based on service quality, expertise, and demand once they build a reputation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do users book and pay for free services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Users can book free services the same way as paid services. If an expert lists a service as free, no payment is required at checkout, making it easier for users to try the service and leave reviews.',
      },
    },
    // Payments & Support
    {
      '@type': 'Question',
      name: 'How do experts receive payments for services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Payments are processed directly through the FLYRLINK platform to ensure secure transactions between experts and clients.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do users pay for expert services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Users can book expert services and pay securely through the in-app payment system and cash payment to the service provider.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can experts change service pricing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, experts have full control over their pricing and can update their rates based on demand, quality, and expertise.',
      },
    },
    // Account & Suspension
    {
      '@type': 'Question',
      name: 'How can I update my profile details on FLYRLINK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can update your name, profile picture, bio, and other details by going to Settings > Edit Profile in the app. Changes will be saved instantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I switch from a user account to an expert account?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! If you want to become an expert, go to Settings > Upgrade to Expert, fill in your expertise details, and submit a verification request. Once approved, your account will be upgraded.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why was my account suspended or restricted?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FLYRLINK may suspend accounts due to: Violations of community guidelines (spam, abuse, fraud). Inappropriate content or behavior reported by users. Multiple failed verification attempts or fraudulent activity. If you believe your suspension was an error, contact support@flyrlink.com for a review.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I recover a suspended or deactivated account?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If your account was temporarily suspended, you can request a review by contacting support. However, permanently deleted accounts cannot be restored.',
      },
    },
    // Security & Privacy
    {
      '@type': 'Question',
      name: 'How does FLYRLINK protect my personal information?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FLYRLINK uses end-to-end encryption, secure payment gateways, and strict data privacy policies to protect user information. Your personal details are never shared without your consent.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I enable two-factor authentication (2FA) for my account?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Currently, FLYRLINK does not support two-factor authentication (2FA) but recommends using a strong password and enabling device-level security like fingerprint or face ID for additional protection.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I report a suspicious user or scam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you come across a fraudulent profile, spam, or suspicious activity, go to the user\'s profile, click "Report", and select the reason. Our team will review and take action accordingly.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I do if I suspect my account has been hacked?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you notice unauthorized activity, immediately: Change your password under Settings > Security. Log out of all devices under Account Settings. Contact FLYRLINK support if you need further assistance.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does FLYRLINK handle payment security?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All transactions are processed through secure payment gateways with encryption to prevent fraud. FLYRLINK does not store sensitive payment information on its servers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does FLYRLINK share my data with third parties?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, FLYRLINK does not sell or share user data with third-party companies. Your personal information is used strictly to enhance your experience on the platform.',
      },
    },
  ],
};

export default function FaqPage() {
  return (
    <div>
      {/* FAQ Schema JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Render Client Component */}
      <FaqClient />
    </div>
  );
}
