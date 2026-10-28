import type { Metadata } from 'next';
import { createPageMetadata } from '../../lib/seo';
import { ServiceStructuredData } from '../../components/StructuredData';
import { PAGE_KEYWORDS } from '../../lib/seo-keywords';
import { GateMotorReference } from '../../components/GateMotorReference';

export const metadata: Metadata = createPageMetadata({
  title: 'Gate & Shutter Motors UAE',
  description: 'Gate and rolling shutter motor installation and repair in Dubai and the UAE, including garage door motors, roll-up door motors, remotes and controls.',
  path: '/motor/',
  keywords: [...PAGE_KEYWORDS.motor],
});

export default function MotorPage() {
  return <><ServiceStructuredData name={'Gate & Shutter Motors UAE'} description={'Gate and rolling shutter motor installation and repair in Dubai and the UAE, including garage door motors, roll-up door motors, remotes and controls.'} path={'/motor/'} /><GateMotorReference /></>;
}
