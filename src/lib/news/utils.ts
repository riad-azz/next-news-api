import { findChild } from "@/lib/utils/cheerio";
import { Cheerio, AnyNode } from "cheerio";
import { isLink, cleanseText, cleanseHtmlTags } from "@/lib/utils";
import { newsSources } from "@/lib/news/constants";
import { BadRequest } from "@/exceptions/server";

export const isValidSource = (sourceName: string) =>
  !!newsSources.find((src) => src.short === sourceName.toUpperCase());

export const validateSource = (sourceName: string | null) => {
  if (!sourceName) {
    throw new BadRequest("Source name is required");
  }

  const upperSourceName = sourceName.toUpperCase();
  const isValid = isValidSource(upperSourceName);
  if (!isValid) {
    throw new BadRequest("Invalid source name");
  }

  return upperSourceName;
};

export const articleFromItem = (itemElement: Cheerio<AnyNode>) => {
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
  const descElementText = descriptionElement?.text();
  const description = !!descElementText ? cleanseText(descElementText) : "";

  const baseArticle: BaseArticle = {
    title,
    link,
    description,
    publishDate,
  };

  return baseArticle;
};
