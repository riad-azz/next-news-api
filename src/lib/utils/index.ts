import { NextRequest } from "next/server";

export const removeEmptyLines = (text: string) => text.replace(/\n/g, "");

export const cleanseHtmlTags = (text: string) => text.replace(/<.*?>/g, "");

export const cleanseText = (text: string) => {
  let cleanText = cleanseHtmlTags(text);
  cleanText = removeEmptyLines(cleanText);
  return cleanText.trim();
};

export const isLink = (link: string) => {
  const pattern = /^https?:\/\/[^\s/$.?#].[^\s]*$/;
  return pattern.test(link);
};

export const getClientIp = (request: NextRequest) => {
  let ip = request.ip ?? request.headers.get("x-real-ip");
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (!ip && forwardedFor) {
    ip = forwardedFor.split(",").at(0) ?? null;
    return ip;
  }
  return ip;
};
