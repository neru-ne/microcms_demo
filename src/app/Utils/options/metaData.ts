const siteTitle = "microCMS x next.js デモサイト";
let DOMAIN = process.env.NEXT_PUBLIC_SITE_URL;

if (!DOMAIN) {
  DOMAIN = ""
}

const ogp = `${DOMAIN}/assets/images/OGP.jpg`;
export const metaData = {
  "/": {
    title: siteTitle,
    description: 'TOPページです',
    url: DOMAIN,
    type: "website",
    imageUrl: ogp,
  },
  "/item": {
    title: `${siteTitle} | 商品`,
    description: '商品ページです',
    url: `${DOMAIN}/item`,
    type: "article",
    imageUrl: ogp,
  },
  "/search": {
    title: `${siteTitle} | 検索`,
    description: '検索ページです',
    url: `${DOMAIN}/search`,
    type: "article",
    imageUrl: ogp,
  },
}
