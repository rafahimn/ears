import type {Metadata} from 'next';
import { createPageMetadata } from '../../lib/seo';
import { ServiceStructuredData } from '../../components/StructuredData';
import { PAGE_KEYWORDS } from '../../lib/seo-keywords';
import {RollingShutterReference} from '../../components/RollingShutterReference';

export const metadata: Metadata = createPageMetadata({
  title: 'Rolling Shutter Doors UAE',
  description: 'Premium rolling shutter doors for homes and businesses in Dubai and UAE, with steel, insulated aluminium, security grill and polycarbonate options.',
  path: '/shutter/',
  keywords: [...PAGE_KEYWORDS.shutter],
});

export default function ShutterPage(){
  return <><ServiceStructuredData name={'Rolling Shutter Doors UAE'} description={'Premium rolling shutter doors for homes and businesses in Dubai and UAE, with steel, insulated aluminium, security grill and polycarbonate options.'} path={'/shutter/'} /><RollingShutterReference/></>;
}
