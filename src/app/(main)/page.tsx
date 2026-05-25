import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import DemoVideo from '@/components/homepage/DemoVideo';
import AIExpertMatching from '@/components/homepage/AIExpertMatching';
import FeaturesSection from '@/components/FeaturesSection';
import CategoriesSection from '@/components/CategoriesSection';
import MeetOurExperts from '@/components/homepage/MeetOurExperts';
import HowItWorks from '@/components/homepage/HowItWorks';
import PlatformFeatures from '@/components/homepage/PlatformFeatures';
import EventsSection from '@/components/EventsSection';
import LiveMoments from '@/components/homepage/LiveMoments';
import Testimonials from '@/components/homepage/Testimonials';
import PricingSection from '@/components/homepage/PricingSection';
import AffiliateHighlights from '@/components/homepage/AffiliateHighlights';
import HomeFAQ from '@/components/homepage/HomeFAQ';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      {/* DARK */}
      <HeroSection />
      {/* WHITE with dots — promo video */}
      <DemoVideo />
      {/* LIGHT with dots */}
      <AIExpertMatching />
      {/* DARK */}
      <FeaturesSection />
      {/* WHITE with dots */}
      <CategoriesSection />
      {/* WHITE */}
      <MeetOurExperts />
      {/* WHITE */}
      <HowItWorks />
      {/* DARK */}
      <PlatformFeatures />
      {/* WHITE */}
      <EventsSection />
      {/* GRAY-50 */}
      <LiveMoments />
      {/* WHITE */}
      <Testimonials />
      {/* GRAY-50 */}
      <PricingSection />
      {/* GRAY-50 */}
      <AffiliateHighlights />
      {/* WHITE */}
      <HomeFAQ />
    </>
  );
}
