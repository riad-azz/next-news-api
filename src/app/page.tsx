import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-between overflow-x-hidden bg-gray-100">
      <main className="container mx-auto md:px-4 md:py-5">
        <div className="rounded bg-white p-5 shadow">
          <h1 className="mb-4 text-4xl font-bold">
            Free News API Documentation
          </h1>
          <section className="mb-6">
            <h2 className="mb-3 text-2xl font-semibold">Endpoint: /api/news</h2>
            <p className="mb-3">
              This endpoint returns the latest news articles a randomly selected
              RSS feed from the{" "}
              <a
                target="_blank"
                className="font-bold text-blue-600 underline"
                href="https://github.com/riad-azz/next-news-api#data-sources--available-rss-feeds"
              >
                Available RSS Feeds
              </a>
              .
            </p>
            <h3 className="my-2 text-xl font-semibold">Request</h3>
            <pre className="rounded bg-gray-100 p-2">
              <code>GET https://riad-news-api.vercel.app/api/news</code>
            </pre>
            <h3 className="my-2 text-xl font-semibold">Response</h3>
            <p className="mb-3">
              The response will be an array of news articles from a random RSS
              feed.
            </p>
            <pre className="rounded bg-gray-100 p-2">
              <code>
                {`[
  {
    "source": "Article Source",
    "title": "Article Title",
    "description": "Article Description",
    "link": "https://www.example.com/article/example-article",
    "pubDate": "2023-06-18T00:00:00Z"
  },
  ...
]`}
              </code>
            </pre>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              Endpoint: /api/news/source?code={"{SHORT_CODE}"}
            </h2>
            <p className="mb-1">
              This endpoint returns the latest news articles from a selected RSS
              feed.
            </p>
            <p className="mb-2">Parameters:</p>
            <ul className="mb-4 list-inside list-disc">
              <li>
                <code className="rounded bg-gray-200 px-2 py-1">code</code>: The
                short code of the source.
              </li>
            </ul>
            <p className="mb-3">
              All available sources and their short code can be found in{" : "}
              <a
                target="_blank"
                className="font-bold text-blue-600 underline"
                href="https://github.com/riad-azz/next-news-api#data-sources--available-rss-feeds"
              >
                Data Sources & Available RSS Feeds
              </a>
            </p>
            <h3 className="my-2 text-xl font-semibold">Request</h3>
            <pre className="rounded bg-gray-100 p-2">
              <code>
                GET https://riad-news-api.vercel.app/api/news/source?code=US-FN
              </code>
            </pre>
            <h3 className="my-2 text-xl font-semibold">Response</h3>
            <p className="mb-3">
              The response will be an array of news articles from Fox News.
            </p>
            <pre className="rounded bg-gray-100 p-2">
              <code>
                {`[
  {
    "source": "Fox News",
    "title": "Article Title",
    "description": "Article Description",
    "link": "https://www.foxnews.com/article/example-article",
    "pubDate": "2023-06-18T00:00:00Z"
  },
  ...
]`}
              </code>
            </pre>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
