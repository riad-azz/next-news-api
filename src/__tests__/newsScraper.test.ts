import {
  fetchNewsFromRSS,
  getRandomNews,
  getSourceNews,
} from "@/lib/news/newsScraper";
import { isValidSource } from "@/lib/news/utils";

const source: Source = {
  short: "NYT",
  name: "New York Times",
  url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",
};

describe("fetchNewsFromRSS", () => {
  it("should return a list of Articles", async () => {
    const result = await fetchNewsFromRSS(source);
    expect(result.length > 0).toBe(true);
  });
});

describe("getSourceNews", () => {
  it("should return a list of Articles from a selected source", async () => {
    const selectedSource = "NYT";
    const result = await getSourceNews(selectedSource);
    expect(result.length > 0).toBe(true);
  });
});

describe("getRandomNews", () => {
  it("should return a list of Articles from a random source", async () => {
    const result = await getRandomNews();
    expect(result.length > 0).toBe(true);
  });
});

describe("isValidSource", () => {
  it("should return true if the source exists", async () => {
    const result = isValidSource("nyt");
    expect(result).toBe(true);
  });
});
