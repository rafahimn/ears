import type { Metadata } from 'next';
import { createPageMetadata } from '../../lib/seo';
export const metadata: Metadata = createPageMetadata({ title: 'Privacy Policy', description: 'Privacy information for Emirates Aluminium Shutter LLC.', path: '/privacy-policy/', noIndex: true });
export { default } from '../privacy-policy/page';
