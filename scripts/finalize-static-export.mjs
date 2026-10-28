import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('out');
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '');

if (!fs.existsSync(outDir) || !fs.statSync(outDir).isDirectory()) {
  throw new Error('Next.js static export folder "out/" was not found. Run next build before finalizing the export.');
}

function listFiles(dir) {
  const result = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) result.push(...listFiles(full));
    else result.push(full);
  }
  return result;
}

function withBasePath(value) {
  if (typeof value !== 'string' || !value.startsWith('/') || value.startsWith('//')) return value;
  if (!basePath || value === basePath || value.startsWith(`${basePath}/`)) return value;
  return `${basePath}${value}`;
}

const files = listFiles(outDir);
let patchedCss = 0;
for (const file of files) {
  if (!file.endsWith('.css')) continue;
  const before = fs.readFileSync(file, 'utf8');
  // Native CSS url() references to public assets are not automatically prefixed by Next.js basePath.
  const after = before.replace(/url\((['"]?)(\/(?:wp-content|brand|rafahim|social-feed)\/[^)'"]+)(['"]?)\)/g,
    (_match, quote1, assetPath, quote2) => `url(${quote1}${withBasePath(assetPath)}${quote2})`);
  if (after !== before) {
    fs.writeFileSync(file, after);
    patchedCss += 1;
  }
}

// Make the PWA manifest work when the project is hosted below /<repository>/.
const manifestPath = path.join(outDir, 'site.webmanifest');
if (fs.existsSync(manifestPath) && basePath) {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  manifest.start_url = withBasePath(manifest.start_url || '/');
  manifest.scope = withBasePath(manifest.scope || '/');
  manifest.icons = (manifest.icons || []).map((icon) => ({ ...icon, src: withBasePath(icon.src) }));
  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
}

// GitHub Pages must not process Next.js output through Jekyll.
fs.writeFileSync(path.join(outDir, '.nojekyll'), '');

const routeChecks = [
  'index.html',
  'services/index.html',
  'shutter/index.html',
  'canopy/index.html',
  'awning/index.html',
  'garage/index.html',
  'motor/index.html',
  'repair/index.html',
  'aluminium-works/index.html',
  'steel-work/index.html',
  'polycarbonate/index.html',
  'about-us/index.html',
  'blog/index.html',
  'blog/rolling-shutters-dubai-guide/index.html',
  'blog/canopy-solutions-dubai-guide/index.html',
  'blog/garage-door-planning-dubai/index.html',
  'blog/awning-solutions-dubai-guide/index.html',
  'blog/gate-motor-selection-dubai/index.html',
  'blog/shutter-door-repair-maintenance-guide/index.html',
  'blog/aluminium-fabrication-dubai-guide/index.html',
  'blog/steel-fabrication-dubai-guide/index.html',
  'blog/polycarbonate-shutters-retail-guide/index.html',
  'privacy-policy/index.html',
  'terms-conditions/index.html',
  'sitemap.xml',
  'robots.txt',
  'rafahim/index.html',
];
const missing = routeChecks.filter((route) => !fs.existsSync(path.join(outDir, route)));
if (missing.length) {
  throw new Error(`Static export is missing expected route output: ${missing.join(', ')}`);
}
console.log(`Static export finalized. basePath="${basePath}", CSS asset files updated: ${patchedCss}, static route checks passed.`);
