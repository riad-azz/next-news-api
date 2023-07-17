import { NextResponse } from "next/server";
import { handleError } from "@/exceptions";
import { getRandomNews } from "@/lib/news/newsScraper";
import { ServerException } from "@/exceptions/server";
import { makeSuccessResponse } from "@/lib/utils";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const articles = await getRandomNews();
    if (articles.length === 0) {
      const error = new ServerException("No articles found, please try again.");
      return handleError(error);
    }
    const successResponse = makeSuccessResponse(articles);
    return NextResponse.json(successResponse, { status: 200 });
  } catch (error: any) {
    console.log("GET /api/news Failed", error.message);
    return handleError(error);
  }
}

export const revalidate = 0;
