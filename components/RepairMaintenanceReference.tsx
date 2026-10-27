import Script from 'next/script';
import { repairMaintenanceMarkup } from './repair-maintenance-markup';

export function RepairMaintenanceReference() {
  return <div className="repair-reference">
    <div dangerouslySetInnerHTML={{ __html: repairMaintenanceMarkup }} />
    <Script src="/repair-page-interactions.js" strategy="afterInteractive" />
  </div>;
}
