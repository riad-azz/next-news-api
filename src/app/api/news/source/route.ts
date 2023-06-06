import { NextResponse } from "next/server";
import { handleError } from "@/exceptions";
import { getSourceNews } from "@/lib/news/news-scraper";
import { BadRequest } from "@/exceptions/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sourceName: string | null = searchParams.get("name");
  console.log(sourceName);

  if (!sourceName) {
    return handleError(new BadRequest("Source is required"));
  }

  try {
    const articles = await getSourceNews(sourceName);
    if (articles.length === 0) {
      return NextResponse.json({ success: false, articles });
    }
    return NextResponse.json({ success: true, articles });
  } catch (error: any) {
    return handleError(error);
  }
}
