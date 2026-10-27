import Script from 'next/script';
import { garageDoorMarkup } from './garage-door-markup';

export function GarageDoorReference() {
  return <>
    <div className="garage-door-reference" dangerouslySetInnerHTML={{ __html: garageDoorMarkup }} />
    <Script src="/garage-page-interactions.js" strategy="afterInteractive" />
  </>;
}
