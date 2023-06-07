import { NextResponse } from "next/server";
import { handleError } from "@/exceptions";
import { getSourceNews } from "@/lib/news/newsScraper";
import { validateSource } from "@/lib/utils/news";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const source: string | null = searchParams.get("name");
  let sourceName: string;

  try {
    sourceName = validateSource(source);
  } catch (error: any) {
    return handleError(error);
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
