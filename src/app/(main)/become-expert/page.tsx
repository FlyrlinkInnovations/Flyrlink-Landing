import type { Metadata } from 'next';
import BecomeExpert from '@/components/BecomeExpert';

export const metadata: Metadata = {
  title: 'Become an Expert: Turn Your Skill Into Income',
  alternates: { canonical: '/become-expert' },
  description:
    'List your services on Flyrlink and turn your skill into income. Set your own price, build a verified profile, and get booked by clients across 12 categories. Free to list.',
};

export default function BecomeExpertPage() {
  return <BecomeExpert />;
}
