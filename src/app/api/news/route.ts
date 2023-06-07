import { NextResponse } from "next/server";
import { handleError } from "@/exceptions";
import { getRandomNews } from "@/lib/news/newsScraper";
import { ServerException } from "@/exceptions/server";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const articles = await getRandomNews();
    if (articles.length === 0) {
      const error = new ServerException("No articles found, please try again.");
      return handleError(error);
    }
    return NextResponse.json({ articles });
  } catch (error: any) {
    console.log("GET /api/news Failed", error.message);
    return handleError(error);
  }
}

export const revalidate = 0;
