import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import VerifiedProsBand from '@/components/homepage/VerifiedProsBand';
import DemoVideo from '@/components/homepage/DemoVideo';
import PopularServices from '@/components/homepage/PopularServices';
import AIExpertMatching from '@/components/homepage/AIExpertMatching';
import FreelancerBenefits from '@/components/homepage/FreelancerBenefits';
import FiveStepsDifferent from '@/components/homepage/FiveStepsDifferent';
import Testimonials from '@/components/homepage/Testimonials';
import AffiliateHighlights from '@/components/homepage/AffiliateHighlights';
import PricingSection from '@/components/homepage/PricingSection';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      {/* 1 — Hero (light split) */}
      <HeroSection />
      {/* 2 — Blue "500+ verified pros, one tap away" band */}
      <VerifiedProsBand />
      {/* 3 — Flyrlink in 20 seconds (left text / right video) */}
      <DemoVideo />
      {/* 4 — Popular services (horizontal scroll) */}
      <PopularServices />
      {/* 5 — Find your expert in 5 simple steps */}
      <AIExpertMatching />
      {/* 6 — Make it all happen with freelancers */}
      <FreelancerBenefits />
      {/* 7 — Five steps. Done differently. */}
      <FiveStepsDifferent />
      {/* 8 — Testimonials: Loved by 10,000+ clients */}
      <Testimonials />
      {/* 9 — Affiliate: Bring your audience. Earn for a year. */}
      <AffiliateHighlights />
      {/* 10 — Simple, transparent pricing */}
      <PricingSection />
      {/* 11 — Footer is provided by the (main) layout */}
    </>
  );
}
