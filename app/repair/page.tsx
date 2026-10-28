import type { Metadata } from 'next';
import { createPageMetadata } from '../../lib/seo';
import { ServiceStructuredData } from '../../components/StructuredData';
import { PAGE_KEYWORDS } from '../../lib/seo-keywords';
import { RepairMaintenanceReference } from '../../components/RepairMaintenanceReference';

export const metadata: Metadata = createPageMetadata({
  title: 'Rolling Shutter & Garage Door Repair Dubai',
  description: 'Repair and preventive maintenance for rolling shutters, automatic garage doors, gate motors and parking barriers in Dubai. Send photos or a fault video to discuss the repair scope.',
  path: '/repair/',
  keywords: [...PAGE_KEYWORDS.repair],
});

export default function RepairPage() {
  return <><ServiceStructuredData name={'Rolling Shutter & Garage Door Repair Dubai'} description={'Repair and preventive maintenance for rolling shutters, automatic garage doors, gate motors and parking barriers in Dubai. Send photos or a fault video to discuss the repair scope.'} path={'/repair/'} /><RepairMaintenanceReference /></>;
}
