import type { Metadata } from 'next';
import { createPageMetadata } from '../../lib/seo';
import { ServiceStructuredData } from '../../components/StructuredData';
import { PAGE_KEYWORDS } from '../../lib/seo-keywords';
import { GarageDoorReference } from '../../components/GarageDoorReference';

export const metadata: Metadata = createPageMetadata({
  title: 'Garage Doors UAE | Sectional Doors',
  description: 'Residential and sectional garage doors in Dubai and UAE, including insulated overhead, aluminium glass and frameless options, with motor support.',
  path: '/garage/',
  keywords: [...PAGE_KEYWORDS.garage],
});

export default function GaragePage() {
  return <><ServiceStructuredData name={'Residential & Sectional Garage Doors UAE'} description={'Residential and sectional garage doors in Dubai and UAE, including insulated overhead, aluminium glass and frameless options, with motor support.'} path={'/garage/'} /><GarageDoorReference /></>;
}
