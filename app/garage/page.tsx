import type { Metadata } from 'next';
import { createPageMetadata } from '../../lib/seo';
import { ServiceStructuredData } from '../../components/StructuredData';
import { PAGE_KEYWORDS } from '../../lib/seo-keywords';
import { GarageDoorReference } from '../../components/GarageDoorReference';

export const metadata: Metadata = createPageMetadata({
  title: 'Automatic Garage Door Installation & Repair Dubai',
  description: 'Automatic garage door installation, motorisation and repair in Dubai for villas, homes and commercial properties. Compare door and motor options and request a site-based quotation.',
  path: '/garage/',
  keywords: [...PAGE_KEYWORDS.garage],
});

export default function GaragePage() {
  return <><ServiceStructuredData name={'Automatic Garage Door Installation & Repair Dubai'} description={'Automatic garage door installation, motorisation and repair in Dubai for villas, homes and commercial properties. Compare door and motor options and request a site-based quotation.'} path={'/garage/'} /><GarageDoorReference /></>;
}
