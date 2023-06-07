import { load } from "cheerio";
import { newsSources } from "./constants";
import { findElement } from "@/lib/utils/cheerio";
import { articleFromItem } from "@/lib/news/helpers";
import { BadRequest } from "@/exceptions/server";

export const fetchNewsFromRSS = async (url: string): Promise<Article[]> => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/113.0",
    },
    cache: "no-store",
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

  for (let i = 0; i < items.length; i++) {
    const element = items.eq(i);
    const itemElement = $(element);

    const article = articleFromItem(itemElement);
    if (!article) continue;

    articles.push(article);
    if (articles.length >= 20) break;
  }

  return articles;
};

export const getSourceNews = async (sourceName: string): Promise<Article[]> => {
  const source = newsSources.find(
    (src) => src.short === sourceName.toUpperCase()
  );

  if (!source) {
    throw new BadRequest(`Invalid source name`);
  }

  try {
    const articles = await fetchNewsFromRSS(source.url);
    return articles;
  } catch (error: any) {
    console.log(
      `getNewsSource failed: for ${source.name}, reason: ${error.message}`
    );
    return [];
  }
};

export const getRandomNews = async (): Promise<Article[]> => {
  const sourceIndex = Math.floor(Math.random() * newsSources.length);
  const source = newsSources[sourceIndex];

  try {
    const articles = await fetchNewsFromRSS(source.url);
    return articles;
  } catch (error: any) {
    console.log(
      `getRandomNews failed: for ${source.name}, reason: ${error.message}`
    );
    return [];
  }
};
