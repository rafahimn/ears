import type { Metadata } from 'next';
import { sitePath } from '../../lib/paths';

// The profile page moved from /rafahim/ to /ra-fahim/. This site is a static export, so a server redirect is not
// possible; this tiny page forwards visitors (and search engines) to the new address instead.
const TARGET = '/ra-fahim/';

export const metadata: Metadata = {
  title: 'RA Fahim — Developer & Creator',
  alternates: { canonical: TARGET },
  robots: { index: false, follow: true },
};

export default function RafahimMovedPage() {
  const target = sitePath(TARGET);
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${target}`} />
      <script dangerouslySetInnerHTML={{ __html: `window.location.replace(${JSON.stringify(target)});` }} />
      <p style={{ padding: '2rem', textAlign: 'center' }}>This page has moved to <a href={target}>{target}</a>.</p>
    </>
  );
}
