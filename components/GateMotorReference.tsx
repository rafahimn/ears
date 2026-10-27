import Script from 'next/script';
import { gateMotorMarkup } from './gate-motor-markup';

export function GateMotorReference() {
  return <>
    <div className="gate-motor-reference" dangerouslySetInnerHTML={{ __html: gateMotorMarkup }} />
    <Script src="/motor-page-interactions.js" strategy="afterInteractive" />
  </>;
}
