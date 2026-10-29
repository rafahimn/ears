import type { Metadata } from 'next';
import './home-reference.css';
import { HomeReference } from '../components/HomeReference';
import { BusinessStructuredData } from '../components/StructuredData';
import { createPageMetadata } from '../lib/seo';
import { PAGE_KEYWORDS } from '../lib/seo-keywords';

const homeMetadata: Metadata = createPageMetadata({
  title: 'Rolling Shutters UAE & Dubai',
  description: 'Emirates Aluminium Rolling Shutter LLC (Emirates Aluminium Shutter LLC): premium rolling shutters, automatic doors and garage doors for homes and businesses in Dubai and the UAE.',
  path: '/',
  keywords: [...PAGE_KEYWORDS.home],
});

export const metadata: Metadata = {
  ...homeMetadata,
  title: { absolute: 'Emirates Aluminium Rolling Shutter LLC | Rolling Shutters Dubai & UAE' },
};

export default function Home() { return <><BusinessStructuredData /><HomeReference /></>; }
