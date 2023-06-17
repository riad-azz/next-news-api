# Simple News API Example Using RSS

This project is a straightforward news API that utilizes RSS to retrieve and deliver news content in the form of JSON. The API functions by fetching news articles from various sources through their respective RSS feeds and converting them into a structured JSON format for easy integration and consumption by other applications.

You can use the API here : [riad-news-api.vercel.app/api/news](https://riad-news-api.vercel.app/api/news)

## Installation Instructions

First your can download the repository zip file or clone the repository:

```bash
git clone https://github.com/riad-azz/next-news-api.git
```

Install the dependencies by running the follow commands

```bash
cd next-news-api
```

```bash
npm install
```

Running the server

```bash
# Development
npm run dev

# Build
npm run build

# Start
npm run start
```

Open [http://localhost:3000/api](http://localhost:3000/api) with your browser to see the result.

## Usage Examples

* Retrieve news articles from various sources effortlessly by utilizing the `/api/news` endpoint for a random source selection (20 articles max per request).

```bash
curl -i "https://riad-news-api.vercel.app/api/news"
```

![Random news source endpoint preview](https://github.com/riad-azz/readme-storage/blob/main/next-news-api/random-source-preview.png?raw=true)

* You can also customize news retrieval leveraging the `/api/news/source` endpoint. Simply include the desired source short code as the name parameter to fetch news specifically from your selected source (20 articles max per request).

```bash
curl -i "https://riad-news-api.vercel.app/api/news/source?name=US-FN"
```

![Custom news source endpoint preview](https://github.com/riad-azz/readme-storage/blob/main/next-news-api/custom-source-preview.png?raw=true)

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
