/**
 * URL helpers for both a custom-domain deployment and GitHub Pages project URLs.
 * `NEXT_PUBLIC_BASE_PATH` is set by the Pages workflow using configure-pages output.
 */
export const BASE_PATH = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '');

export function sitePath(path: string): string {
  if (!path) return path;
  // Do not touch absolute/external URLs, hash links, mail/tel links, or data URLs.
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/|#|data:|blob:)/i.test(path)) return path;
  if (!path.startsWith('/')) return path;
  if (!BASE_PATH || path === BASE_PATH || path.startsWith(`${BASE_PATH}/`)) return path;
  return `${BASE_PATH}${path}`;
}

/**
 * Prefix absolute local URLs embedded in legacy HTML strings such as imported
 * WordPress markup. Normal JSX `next/link` links do not need this helper.
 */
export function markupWithBasePath(markup: string): string {
  if (!markup || !BASE_PATH) return markup;
  return markup
    .replace(/\b(href|src|poster|action|data-src)=(["'])\/(?!\/)([^"']*)\2/gi,
      (_match, attribute, quote, rest) => `${attribute}=${quote}${sitePath(`/${rest}`)}${quote}`)
    .replace(/url\((['"]?)(\/(?:wp-content|brand|rafahim|social-feed)\/[^)'"]+)(['"]?)\)/gi,
      (_match, quote1, asset, quote2) => `url(${quote1}${sitePath(asset)}${quote2})`);
}
