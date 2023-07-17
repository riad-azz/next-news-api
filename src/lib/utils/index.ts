import { ErrorResponse } from "@/types";
import { NextRequest } from "next/server";

export const removeEmptyLines = (text: string) => text.replace(/\n/g, "");

export const cleanseHtmlTags = (text: string) => text.replace(/<.*?>/g, "");

export const cleanseText = (text: string) => {
  let cleanText = cleanseHtmlTags(text);
  cleanText = removeEmptyLines(cleanText);
  return cleanText.trim();
};

export const makeErrorResponse = (message: string) => {
  const errorResponse: ErrorResponse = { status: "error", message };
  return errorResponse;
};

export const makeSuccessResponse = <T>(data: T) => {
  const successResponse = { status: "success", data };
  return successResponse;
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

export const getRandomObjectsFromArray = <T>(array: T[], count: number) => {
  const shuffledArray = array.sort(() => 0.5 - Math.random());
  return shuffledArray.slice(0, count);
};
