import { siteConfig } from "@/configs/site";
import { Metadata } from "next";

export const mainMetadata: Metadata = {
  title:
    "Real-Time News API | JSON Feeds | RSS Integration | Your News Aggregation Solution",
  description: siteConfig.description,
  keywords: [
    "News API",
    "RSS Integration",
    "News Aggregation",
    "JSON News Feeds",
    "Real-time News",
    "News Fetching",
    "RSS to JSON Conversion",
    "News Sources",
    "Developer-Friendly API",
    "Simple Integration",
    "News Delivery",
    "Customizable News Aggregator",
    "Reliable News Content",
    "Third-party News API",
    "Headline Retrieval",
    "Publication Date Filtering",
    "Source Management",
    "News Article Linking",
    "RSS Feed Parsing",
    "Comprehensive News Coverage",
  ],
  authors: [
    {
      name: "riad-azz",
      url: "https://github.com/riad-azz",
    },
  ],
  creator: "riad-azz",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#1f2937" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImageUrl,
        width: 1240,
        height: 580,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImageUrl],
    creator: "@riadazz",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/images/favicon-32x32.png",
    apple: "/images/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};
