import type {Metadata} from 'next';
import { createPageMetadata } from '../../lib/seo';
import { ServiceStructuredData } from '../../components/StructuredData';
import { PAGE_KEYWORDS } from '../../lib/seo-keywords';
import {RollingShutterReference} from '../../components/RollingShutterReference';

export const metadata: Metadata = createPageMetadata({
  title: 'Rolling Shutter Installation & Repair in Dubai',
  description: 'Rolling shutter installation, motorised shop shutters and repair in Dubai for shops, warehouses, showrooms and villas. Compare insulated, clear and manual options, then request a site-based quote.',
  path: '/shutter/',
  keywords: [...PAGE_KEYWORDS.shutter],
});

export default function ShutterPage(){
  return <><ServiceStructuredData name={'Rolling Shutter Installation & Repair in Dubai'} description={'Rolling shutter installation, motorised shop shutters and repair in Dubai for shops, warehouses, showrooms and villas. Compare insulated, clear and manual options, then request a site-based quote.'} path={'/shutter/'} /><RollingShutterReference/></>;
}
