import Script from 'next/script';
import { rollingShutterMarkup } from './rolling-shutter-markup';

export function RollingShutterReference() {
  return <>
    <div className="rolling-shutter-reference" dangerouslySetInnerHTML={{ __html: rollingShutterMarkup }} />
    <Script src="/shutter-page-interactions.js" strategy="afterInteractive" />
  </>;
}
