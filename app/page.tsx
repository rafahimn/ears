import type { Metadata } from 'next';
import './home-reference.css';
import { HomeReference } from '../components/HomeReference';
import { BusinessStructuredData } from '../components/StructuredData';
import { createPageMetadata } from '../lib/seo';
import { PAGE_KEYWORDS } from '../lib/seo-keywords';

export const metadata: Metadata = createPageMetadata({
  title: 'Rolling Shutters UAE & Dubai',
  description: 'Premium, secure and stylish rolling shutters for homes and businesses in Dubai and UAE. Explore customized shutter solutions, automatic doors and garage doors.',
  path: '/',
  keywords: [...PAGE_KEYWORDS.home],
});

export default function Home() { return <><BusinessStructuredData /><HomeReference /></>; }
