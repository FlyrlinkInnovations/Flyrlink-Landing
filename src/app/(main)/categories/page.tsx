import type { Metadata } from 'next';
import BrowseExperts from '@/components/BrowseExperts';
import { CATEGORIES, TOTAL_SERVICE_COUNT } from '@/config/services';

export const metadata: Metadata = {
  title: 'Browse Experts: Verified Coaches, Tutors & Pros',
  alternates: { canonical: '/categories' },
  description: `Browse verified experts on Flyrlink across ${CATEGORIES.length} categories and ${TOTAL_SERVICE_COUNT}+ services. Search by name or skill, filter, and book a 1:1 session in minutes.`,
};

export default function BrowseExpertsPage() {
  return <BrowseExperts />;
}
