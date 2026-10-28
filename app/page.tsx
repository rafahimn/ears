import type { Metadata } from 'next';
import './home-reference.css';
import { HomeReference } from '../components/HomeReference';
import { BusinessStructuredData } from '../components/StructuredData';
import { createPageMetadata } from '../lib/seo';
import { PAGE_KEYWORDS } from '../lib/seo-keywords';

export const metadata: Metadata = createPageMetadata({
  title: 'Rolling Shutter Company in Dubai',
  description: 'Rolling shutter installation and repair, automatic garage doors, gate motors, awnings, canopies and aluminium or steel fabrication in Dubai. Request a clear quotation.',
  path: '/',
  keywords: [...PAGE_KEYWORDS.home],
});

export default function Home() { return <><BusinessStructuredData /><HomeReference /></>; }
