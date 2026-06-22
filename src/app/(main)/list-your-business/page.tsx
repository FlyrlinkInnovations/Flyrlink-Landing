import type { Metadata } from 'next';
import ListYourBusiness from '@/components/ListYourBusiness';

export const metadata: Metadata = {
  title: 'List Your Business: Get Discovered & Booked',
  alternates: { canonical: '/list-your-business' },
  description:
    'List your business on Flyrlink and connect with clients looking for trusted experts. Create a free profile, get verified, and start getting booked across India.',
};

export default function ListYourBusinessPage() {
  return <ListYourBusiness />;
}
