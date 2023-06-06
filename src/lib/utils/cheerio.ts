import { CheerioAPI, Cheerio, AnyNode } from "cheerio";

export const findElement = ($: CheerioAPI, selector: string) => {
  const element = $(selector);
  return element.length > 0 ? element : null;
};

export const findChild = (parent: Cheerio<AnyNode>, selector: string) => {
  const element = parent.find(selector);
  return element.length > 0 ? element : null;
};
