import HeroSection from '@/components/HeroSection';
import AIExpertMatching from '@/components/homepage/AIExpertMatching';
import FeaturesSection from '@/components/FeaturesSection';
import CategoriesSection from '@/components/CategoriesSection';
import HowItWorks from '@/components/homepage/HowItWorks';
import PlatformFeatures from '@/components/homepage/PlatformFeatures';
import EventsSection from '@/components/EventsSection';
import Testimonials from '@/components/homepage/Testimonials';
import PricingSection from '@/components/homepage/PricingSection';
import AffiliateHighlights from '@/components/homepage/AffiliateHighlights';
import HomeFAQ from '@/components/homepage/HomeFAQ';

export default function HomePage() {
  return (
    <>
      {/* DARK */}
      <HeroSection />
      {/* LIGHT with dots */}
      <AIExpertMatching />
      {/* DARK */}
      <FeaturesSection />
      {/* WHITE with dots */}
      <CategoriesSection />
      {/* WHITE */}
      <HowItWorks />
      {/* DARK */}
      <PlatformFeatures />
      {/* WHITE */}
      <EventsSection />
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
