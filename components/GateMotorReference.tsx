import { sitePath } from '../lib/paths';
import Script from 'next/script';
import { gateMotorMarkup } from './gate-motor-markup';
import { markupWithBasePath } from '../lib/paths';

export function GateMotorReference() {
  return <>
    <div className="gate-motor-reference" dangerouslySetInnerHTML={{ __html: markupWithBasePath(gateMotorMarkup) }} />
    <Script src={sitePath("/motor-page-interactions.js")} strategy="afterInteractive" />
  </>;
}
