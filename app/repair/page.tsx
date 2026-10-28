import type { Metadata } from 'next';
import { createPageMetadata } from '../../lib/seo';
import { ServiceStructuredData } from '../../components/StructuredData';
import { PAGE_KEYWORDS } from '../../lib/seo-keywords';
import { RepairMaintenanceReference } from '../../components/RepairMaintenanceReference';

export const metadata: Metadata = createPageMetadata({
  title: 'Automatic Door Repair UAE',
  description: 'Rolling shutter, sectional garage door and automatic door maintenance in Dubai and Abu Dhabi. Share photos or a fault video to discuss repair options.',
  path: '/repair/',
  keywords: [...PAGE_KEYWORDS.repair],
});

export default function RepairPage() {
  return <><ServiceStructuredData name={'Automatic Door Repair UAE'} description={'Rolling shutter, sectional garage door and automatic door maintenance in Dubai and Abu Dhabi. Share photos or a fault video to discuss repair options.'} path={'/repair/'} /><RepairMaintenanceReference /></>;
}
