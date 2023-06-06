import { AnyNode, Cheerio, load } from "cheerio";
import { newsFeeds } from "./constants";
import { findElement, findChild } from "@/lib/utils/cheerio";
import { BadRequest } from "@/exceptions/server";
import { cleanseHtmlTags, isLink } from "@/lib/utils";

const articleFromItem = (itemElement: Cheerio<AnyNode>) => {
  const titleElement = findChild(itemElement, "title");
  const linkElement =
    findChild(itemElement, "link") ||
    findChild(itemElement, "url") ||
    findChild(itemElement, "guid ");
  const pubDateElement = findChild(itemElement, "pubDate");

  if (!titleElement || !linkElement || !pubDateElement) {
    console.log("Invalid item Skipped in RSS feed");
    return null;
  }

  // Main article info
  const title = cleanseHtmlTags(titleElement.text().trim());
  const link = linkElement.text().trim();
  if (!isLink(link)) return null;
  const publishDate = pubDateElement.text();
  // Optional article info
  const descriptionElement = findChild(itemElement, "description");
  const description = cleanseHtmlTags(descriptionElement?.text() ?? "");

  const article: Article = {
    title,
    link,
    description,
    publishDate,
  };

  return article;
};

export const getNewsFromRSS = async (url: string): Promise<Article[]> => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/113.0",
    },
  });

  if (response.status !== 200) {
    console.log(`Bad response from RSS feed ${url}`);
    return [];
  }

  const responseText = await response.text();
  const $ = load(responseText, { xmlMode: true });

  const items = findElement($, "item");

  if (!items) {
    console.log(`No items found in ${url}`);
    return [];
  }

  const articles: Article[] = [];

  items.each((index, element) => {
    const itemElement = $(element);

    const article = articleFromItem(itemElement);
    if (!article) return;

    articles.push(article);
  });

  return articles;
};

export const getSourceNews = async (source: string): Promise<Article[]> => {
  const feedFilter = newsFeeds.filter(
    (feed) => feed.short === source.toUpperCase()
  );

  if (feedFilter.length === 0) {
    throw new BadRequest(`Invalid source`);
  }

  const feed = feedFilter[0];
  const feedUrl = feed.url;

  try {
    const articles = await getNewsFromRSS(feedUrl);
    return articles;
  } catch (error: any) {
    console.log(
      `getNewsSource failed: for ${source}, reason: ${error.message}`
    );
    return [];
  }
};

export const getRandomNews = async (): Promise<Article[]> => {
  const feedIndex = Math.floor(Math.random() * newsFeeds.length);
  const feed = newsFeeds[feedIndex];
  const feedUrl = feed.url;

  try {
    const articles = await getNewsFromRSS(feedUrl);
    return articles;
  } catch (error: any) {
    console.log(
      `getRandomNews failed: for ${feedUrl}, reason: ${error.message}`
    );
    return [];
  }
};
