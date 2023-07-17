import { NextResponse } from "next/server";
import { handleError } from "@/exceptions";
import { getSourceNews } from "@/lib/news/newsScraper";
import { validateSource } from "@/lib/news/utils";
import { ServerException } from "@/exceptions/server";
import { makeSuccessResponse } from "@/lib/utils";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const source: string | null = searchParams.get("code");
  let sourceName: string;

  try {
    sourceName = validateSource(source);
  } catch (error: any) {
    return handleError(error);
  }

  try {
    const articles = await getSourceNews(sourceName);
    if (articles.length === 0) {
      const error = new ServerException("No articles found, please try again.");
      return handleError(error);
    }
    const successResponse = makeSuccessResponse(articles);
    return NextResponse.json(successResponse, { status: 200 });
  } catch (error: any) {
    return handleError(error);
  }
}
