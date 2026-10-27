import { sitePath } from '../lib/paths';
import Script from 'next/script';
import { rollingShutterMarkup } from './rolling-shutter-markup';
import { markupWithBasePath } from '../lib/paths';

export function RollingShutterReference() {
  return <>
    <div className="rolling-shutter-reference" dangerouslySetInnerHTML={{ __html: markupWithBasePath(rollingShutterMarkup) }} />
    <Script src={sitePath("/shutter-page-interactions.js")} strategy="afterInteractive" />
  </>;
}
