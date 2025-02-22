import FirecrawlApp from "@mendable/firecrawl-js";

const app = new FirecrawlApp({apiKey: process.env.FIRE_CRAWL_API});

const crawlResponse = await app.crawlUrl('https://www.danilo-correia.com/', {
  limit: 1,
  scrapeOptions: {
    formats: ['markdown'],
  }
})

// if (!crawlResponse.success) {
//   throw new Error(`Failed to crawl: ${crawlResponse}`)
// }

console.log(crawlResponse)

