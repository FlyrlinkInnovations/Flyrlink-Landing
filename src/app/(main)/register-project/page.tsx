import type { Metadata } from 'next';
import RegisterProject from '@/components/RegisterProject';

export const metadata: Metadata = {
  title: 'Register Your Project: Get Matched With Experts',
  alternates: { canonical: '/register-project' },
  description:
    'Submit your project on Flyrlink and get matched with verified experts. Share your category, budget, and timeline — receive proposals and book the perfect pro.',
};

export default function RegisterProjectPage() {
  return <RegisterProject />;
}
