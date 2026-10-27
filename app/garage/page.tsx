import type { Metadata } from 'next';
import { GarageDoorReference } from '../../components/GarageDoorReference';

export const metadata: Metadata = {
  title: 'Automatic Garage Doors | Premium Garage Door Systems',
  description: 'Configure premium and standard automatic garage doors, choose panel finish and options, and request a clear site-based quotation across Dubai and the UAE.',
  alternates: { canonical: '/garage/' },
};

export default function GaragePage() {
  return <GarageDoorReference />;
}
