export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /redirect
Disallow: /admin
Disallow: /api

# Sitemap
Sitemap: https://ptvipsitesdeapostas.com/sitemap.xml

# Crawl-delay for responsible crawling
Crawl-delay: 1

# Block malicious bots
User-agent: SemrushBot
Disallow: /

User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /
`

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
