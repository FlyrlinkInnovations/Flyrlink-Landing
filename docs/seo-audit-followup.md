# SEO / Performance Audit — Follow-up Notes

Tracks the audit in `flyrlink.com.pdf`. Marks what was fixed in code and what
still needs a human (hosting console access or third-party IDs).

## Done in code

### Performance (was the worst score: Lighthouse 40, LCP 19.7s, ~30MB payload)
- Root cause: `next.config.ts` uses `output: 'export'` + `images: { unoptimized: true }`,
  so Next.js never optimizes images. Source photos in `public/Marketing content`
  were 6-23MB each (416MB total in `public/`).
- Fix: `scripts/optimize-images.mjs` resizes every image to a max 1600px long edge
  and recompresses (mozjpeg q78 / png q80) in place. Result: **396MB -> 11.8MB**
  (~97% reduction) across 65 files. Paths/filenames unchanged, so no code touched.
- Re-run any time new images are added: `node scripts/optimize-images.mjs`
  (use `--dry-run` to preview).

### Technical + on-page SEO
- Added `alternates.canonical` to every page (was only on blog posts):
  static pages, the homepage, and the dynamic `/categories/[slug]` and
  `/services/[slug]` templates. Canonicals resolve against `metadataBase`
  (`https://flyrlink.com`).
- Rewrote meta titles to be keyword-first and removed the redundant
  "Flyrlink | Flyrlink" doubling (the root layout already appends `| Flyrlink`).
- Footer now has an "Explore categories" link strip so every `/categories/[slug]`
  page is one hop from any page (crawlability + link equity).

### Conversion
- Added sharper hero CTAs under the search: **Find an Expert Now** (-> /find-experts)
  and **Become an Expert** (-> /become-expert). The hero already carries proof
  (real photos, sample prices, ratings, review count, verified messaging).

### Blog (keywords + indexing)
- Fixed the blog API default URL: it pointed at `api.leorix.com`, whose TLS cert
  is for `api.opswyse.com` (handshake fails), so the build silently fetched zero
  remote posts and **only the 2 local posts reached the sitemap**. Repointed the
  default to `https://api.opswyse.com/...` (verified: returns all 12 posts).
  After the fix the sitemap lists all **14** blog URLs (12 remote + 2 local).
- Added SEO keywords to every post: local posts support a `keywords` frontmatter
  field (comma list or YAML array); a brand keyword set is merged into all posts
  so even remote posts (the API returns no keyword field) emit `<meta name="keywords">`.
- Blog posts already had canonical, OpenGraph/Twitter, and BlogPosting JSON-LD.

## Needs a human

### 1. www -> non-www redirect (AWS Amplify) — HIGH PRIORITY
Both `https://flyrlink.com/` and `https://www.flyrlink.com/` return 200, which
splits SEO authority. This is a static export, so it CANNOT be fixed in
`next.config` (`redirects()` is ignored with `output: 'export'`). It must be set
in the Amplify console:

**Preferred — Domain management:**
1. Amplify Console -> your app -> Hosting -> Custom domains -> Manage domain.
2. Make sure both the apex (`flyrlink.com`) and `www.flyrlink.com` are attached.
3. Set the apex as the primary domain and configure `www` as a **redirect**
   (Amplify issues a 301 from www to apex). Pick one direction and keep it.

**Alternative — Rewrites and redirects:** add a 301 rule from the www host to the
apex (`https://www.flyrlink.com` -> `https://flyrlink.com`).

After applying, verify: `curl -I https://www.flyrlink.com/` should return `301`
with `location: https://flyrlink.com/`.

### 2. Tracking — partially done
- **GA4: installed.** `gtag.js` for measurement ID `G-GQ6EZJZTNZ` is wired into
  `src/app/layout.tsx` via `next/script` (`afterInteractive`) and renders on every
  page. Verify in GA4 Realtime after deploy.
- Still to do when ready:
  - Google Tag Manager (container `GTM-XXXX`) if you want a central tag hub
    (GA4 can later be moved to fire through GTM instead of directly).
  - Facebook/Meta Pixel for ad conversions, retargeting, audiences
    (Meta Pixel Helper currently shows nothing).
  - Verify the domain in Google Search Console for organic/keyword/SEO monitoring.

### 3. Promo video (20MB)
`public/Flyrlink Promo Video (1).mp4` is now the single largest asset. It uses
`preload="metadata"`, so it is not part of the initial payload, but it should be
transcoded (e.g. H.264/H.265 ~1080p, target a few MB) before any autoplay or
heavier promotion. Needs `ffmpeg`, which is not installed locally.

### 4. leorix.com -> opswyse.com migration (heads-up, NOT changed)
The blog API was on the broken `api.leorix.com` cert; only the blog URL was
repointed to `api.opswyse.com`. The same `api.leorix.com` host is still used by
the **waiting-list ingest** (`src/config.ts`) and the **booking calendar**
(`src/services/calendar.ts`). If those features are broken in production it is
almost certainly the same cert issue. Verify and, if so, repoint them to
`opswyse.com` too (left untouched here since they were out of scope).

### 5. og-image.jpg
`public/og-image.jpg` is only 504 bytes — likely a broken/placeholder OG image.
Replace with a real 1200x630 share image.
