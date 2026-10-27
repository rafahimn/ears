import { sitePath } from '../lib/paths';
import Script from 'next/script';
import { garageDoorMarkup } from './garage-door-markup';
import { markupWithBasePath } from '../lib/paths';

export function GarageDoorReference() {
  return <>
    <div className="garage-door-reference" dangerouslySetInnerHTML={{ __html: markupWithBasePath(garageDoorMarkup) }} />
    <Script src={sitePath("/garage-page-interactions.js")} strategy="afterInteractive" />
  </>;
}
