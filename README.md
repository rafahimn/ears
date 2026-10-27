# Emirates Aluminium Shutter LLC — Next.js Static Website

Premium, responsive Next.js static export based on the supplied WordPress backup, with the earlier screenshot-style light hero, interactive service selector and green/gold brand styling. Designed for deployment to GitHub Pages with the custom domain `emiratesaluminiumshutter.com`.

## Current business contact details

- Phone / WhatsApp: **+971 55 205 2347**
- Email: **emiratesaluminiumshutter@gmail.com**
- Address: **43 Al Nakhal Rd, Naif, Deira, Dubai, United Arab Emirates**
- Google Maps: https://maps.app.goo.gl/oaDi8fWAdLaz3X1f9?g_st=awb
- Coordinates: 25.271996, 55.304935

## Local development

```bash
npm install
npm run dev
```

## Production static export

```bash
npm install
npm run build
```

Next.js exports the static website to `out/`. The included GitHub Actions workflow builds and deploys `out/` on pushes to `main`, on manual dispatch, and on the daily social-feed refresh schedule.

## Pages and features

- Responsive branded header and premium, animation-led hero with call/WhatsApp CTAs
- Animated two-step WhatsApp quote wizard (service + emirate), with all 9 services
- Service detail pages and service configurators
- Garage-door package comparison
- Instagram and Facebook follow cards, followed by an Instagram-only recent-post carousel with local image snapshots, desktop arrow controls and mobile swipe support
- FAQs, reviews, UAE coverage and contact section
- About, Insights, Privacy Policy and Terms pages
- Responsive navigation, staggered reveal, subtle image drift, animated proof strip and floating contact actions
- Original WordPress upload assets are stored locally under `public/wp-content/uploads/`
- Custom brand logo, favicon, app icons, manifest, sitemap, robots.txt and CNAME

This project uses static export and does not require WordPress, PHP or a database at runtime.


### Latest update (V23)
- Restored the earlier screenshot-style homepage hero and two-step WhatsApp quick quote panel.
- Added a dedicated Polycarbonate Shutters service page and selectable quote option.
- Matched service-card and detail imagery to each service, including a purpose-made polycarbonate shutter visual (optimized WebP).
- Added the company name beside the logo in the footer.
- Replaced the profile embed and project-image carousel with real Instagram/Facebook post cards; no local website images are labelled as social posts.
- Added scheduled social-feed snapshotting during GitHub Pages deployment and site-wide motion/interaction polish.

## Automatic social post previews (Instagram + Facebook)

The homepage has Instagram and Facebook follow cards, followed by an Instagram-only recent-post carousel. The site is a static GitHub Pages export, so the scheduled deployment snapshots public posts during build and downloads the post images into `public/social-feed/`. Visitors do not need API tokens, and the post cards open the original post on the relevant social network.

To enable real, automatically refreshed posts, open the GitHub repository and go to **Settings → Secrets and variables → Actions**. Add these repository secrets:

- `INSTAGRAM_ACCESS_TOKEN` — authorized token for an Instagram Business or Creator account, with the Instagram API media-read permission (`instagram_business_basic` for Instagram Login).
- `FACEBOOK_PAGE_ID` — the Facebook Page ID (a share link alone is not a Page ID).
- `FACEBOOK_PAGE_ACCESS_TOKEN` — Page access token with permission to read Page posts.

Instagram and Facebook are independent: the follow cards always appear, but only Instagram posts are shown in the homepage carousel. Configure `INSTAGRAM_ACCESS_TOKEN` to populate that carousel with real recent posts. The site deploy workflow refreshes feeds daily and also refreshes them on manual deploy. You can run it from **Actions → Deploy Next.js static site to GitHub Pages → Run workflow** after adding the secrets. `META_GRAPH_API_VERSION` can optionally be added as a repository variable to override the default API version (`v26.0`). Keep all access tokens in GitHub Secrets—never hard-code them in client code or commit them to the repository.

If the secrets have not been configured, deployment still succeeds and the social area shows a brief customer-friendly fallback instead of pretending local project photos are recent social posts.

### Reference-matched service pages

- `/shutter/` uses the rolling-shutter reference sections and interactions.
- `/motor/` uses the gate-motor reference sections and interactions.
- `/garage/` uses the Garage Doors reference sections, interactive package configurator, measurement-to-WhatsApp form, and FAQ accordion.

## Hidden profile route

A separate RA Fahim developer profile page is available directly at `/rafahim/`. It intentionally has no link in the header, mobile menu, footer, or service navigation. The profile image is stored locally at `public/rafahim/ra-fahim.png`, and the page uses the site's evergreen, champagne-gold, and warm-ivory theme plus the shared site header, language switcher, footer, and WhatsApp action.


### GitHub Pages path compatibility (V27)
- The deployment workflow runs `actions/configure-pages` before the build and passes its detected `base_path` to Next.js. This supports both a custom domain (empty path prefix) and a repository URL such as `https://owner.github.io/repository/`.
- Local public image/script URLs use the same build-time path helper; the static-export finalizer prefixes CSS `url()` references, updates the PWA manifest and adds `.nojekyll`.
- Use `npm ci` locally for a lockfile-consistent install, then `npm run build`. The build finalizes and checks expected static routes.
- The first-load logo/loading overlay is server-rendered, auto-dismisses on animation end with a fallback timeout, and respects reduced-motion preferences.
