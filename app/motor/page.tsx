import type { Metadata } from 'next';
import { createPageMetadata } from '../../lib/seo';
import { ServiceStructuredData } from '../../components/StructuredData';
import { PAGE_KEYWORDS } from '../../lib/seo-keywords';
import { GateMotorReference } from '../../components/GateMotorReference';

export const metadata: Metadata = createPageMetadata({
  title: 'Gate Motor Installation & Repair in Dubai',
  description: 'Gate motor installation and repair in Dubai for sliding gates, swing gates and garage doors. Ask about compatible remotes, photocells, control boards and access automation.',
  path: '/motor/',
  keywords: [...PAGE_KEYWORDS.motor],
});

export default function MotorPage() {
  return <><ServiceStructuredData name={'Gate Motor Installation & Repair in Dubai'} description={'Gate motor installation and repair in Dubai for sliding gates, swing gates and garage doors. Ask about compatible remotes, photocells, control boards and access automation.'} path={'/motor/'} /><GateMotorReference /></>;
}
