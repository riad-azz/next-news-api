# Simple News API Using RSS - Next.js

This project is a straightforward news API that utilizes RSS to retrieve and deliver news content in the form of JSON. The API functions by fetching news articles from various sources through their respective RSS feeds and converting them into a structured JSON format for easy integration and consumption by other applications.

You can use the API here : [riad-news-api.vercel.app/api/news](https://riad-news-api.vercel.app/api/news)

## Installation Instructions

1. download the repository zip file or clone the repository:

```bash
git clone https://github.com/riad-azz/next-news-api.git
```

2. Install the dependencies by running the following commands

```bash
cd next-news-api
```

```bash
npm install
```

3. Running the server

```bash
# Development
npm run dev

# Build
npm run build

# Start
npm run start
```

Open [http://localhost:3000/api/news](http://localhost:3000/api/news) with your browser to see the result.

## Usage Examples

### Endpoint : /api/news

Retrieve news articles from various sources effortlessly by utilizing the `/api/news` endpoint for a random source selection (20 articles max per request).

- GET Request

```bash
curl -i "https://riad-news-api.vercel.app/api/news"
```

- Successful GET Request

```js
{
    "status": "success",
    "data": [
        {
            "source": "Source Name",
            "title": "Article title 1",
            "link": "https://example.com/article-slug-97",
            "description": "Article description",
            "pubDate": "Article publish date (its different depending on the source)"
        },
        {
            "source": "Source Name",
            "title": "Article title 2",
            ...
        }
    ]
}
```

- Error GET Request

```json
{
    "status": "error",
    "message": "error message"
}
```

### Endpoint : /api/news/source?code={SHORT_CODE}

You can select a specific news source by simply including the desired source short code as the code parameter (20 articles max per request).

```bash
curl -i "https://riad-news-api.vercel.app/api/news/source?code=US-FN"
```

```js
{
    "status": "success",
    "data": [
        {
            "source": "Fox News",
            "title": "Article title 1",
            "link": "https://foxnews.com/category/article-slug-title--example-44",
            "description": "Article description",
            "pubDate": "Mon, 17 Jul 2023 12:15:01 ED"
        },
        {
            "source": "Fox News",
            "title": "Article title 2",
            ...
        }
    ]
}
```

## Data Sources & Available RSS Feeds

Here is a list of the available sources and their short code :

*You can find and edit the list of all current available RSS feeds in `src/lib/news/constants.ts`*

| Name                                      | Short Code |
| ----------------------------------------- | ---------- |
| Yahoo News                                | INTER-YN   |
| Life Hacker                               | INTER-LH   |
| New York Times                            | US-NYT     |
| CNN News                                  | US-CNNN    |
| Huffington Post                           | US-HP      |
| Fox News                                  | US-FN      |
| Reuters                                   | US-R       |
| Politico                                  | US-P       |
| Los Angeles Times                         | US-LAT     |
| Sydney Morning Herald - Latest News       | AU-SMHLN   |
| ABC News                                  | AU-ABCN    |
| The Age - Latest News                     | AU-TALN    |
| PerthNow                                  | AU-PN      |
| The Canberra Times - Local News           | AU-TCTLN   |
| Brisbane Times - Latest News              | AU-BTLN    |
| Independent Australia                     | AU-IA      |
| Business News - Latest Headlines          | AU-BNLH    |
| InDaily                                   | AU-ID      |
| Crikey                                    | AU-C       |
| Michael West                              | AU-MW      |
| CBC News                                  | CA-CBCN    |
| CTV News                                  | CA-CTVN    |
| Financial Post                            | CA-FP      |
| National Post                             | CA-NP      |
| Ottawa Citizen                            | CA-OC      |
| The Province                              | CA-TP      |
| Toronto Star                              | CA-TST     |
| Toronto Sun                               | CA-TSU     |
| ZEIT ONLINE                               | DE-ZO      |
| FOCUS Online                              | DE-FO      |
| Deutsche Welle                            | DE-DW      |

> The short code is simply the country code of the source then the first letter of each word in their name (INTER is used instead of the country code if the RSS is not region based).

**Disclaimer**: This project is an independent news API and does not claim ownership or association with the news publishers listed. The API serves as a platform to retrieve and deliver news articles from various sources. The content, accuracy, and availability of the news articles are the sole responsibility of their respective publishers. Any issues or concerns regarding the news content should be directed to the respective publishers or sources.

## Contribution

Contributions are welcome to expand the available news sources for the API. To add a new RSS source, please follow these guidelines:

1. Make sure the RSS source complies with the project's `BaseArticle` model, which requires the following information for each article:
    - Title: The title or headline of the article.
    - Link: The direct link to the full article.
    - PubDate: The publication date of the article.

2. Ensure the RSS source is reliable, reputable, and legally allowed to be used for news aggregation.

3. Create a new issue in the repository to propose the addition of the RSS source. Provide details about the source, including its name, and the URL of the RSS feed *(You can find the list of all current available rss feeds in `src/lib/news/constants.ts`)*.

4. Once the proposal is reviewed and approved, you can submit a pull request to add the new RSS source to the project.

Please note that the project maintainers reserve the right to review and make final decisions on accepting or rejecting proposed contributions based on the project's guidelines and requirements.

## License

This project is licensed under the [MIT] License - see the LICENSE.md file for details
