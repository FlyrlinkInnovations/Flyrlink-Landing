import type { Metadata } from 'next';
import ComparePage from '@/components/ComparePage';

export const metadata: Metadata = {
  title: 'Flyrlink vs The Rest: Compare Expert Platforms',
  alternates: { canonical: '/compare' },
  description:
    'See how Flyrlink compares to generic marketplaces and freelance platforms — AI matching, verified experts, live sessions, transparent fees, and more.',
};

export default function Compare() {
  return <ComparePage />;
}
