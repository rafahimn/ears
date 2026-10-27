import { sitePath } from '../lib/paths';
import Script from 'next/script';
import { repairMaintenanceMarkup } from './repair-maintenance-markup';
import { markupWithBasePath } from '../lib/paths';

export function RepairMaintenanceReference() {
  return <div className="repair-reference">
    <div dangerouslySetInnerHTML={{ __html: markupWithBasePath(repairMaintenanceMarkup) }} />
    <Script src={sitePath("/repair-page-interactions.js")} strategy="afterInteractive" />
  </div>;
}
