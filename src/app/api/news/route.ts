import { NextResponse } from "next/server";
import { handleError } from "@/exceptions";
import { getRandomNews } from "@/lib/news/newsScraper";

export async function GET(request: Request) {
  try {
    const articles = await getRandomNews();
    if (articles.length === 0) {
      return NextResponse.json({ success: false, articles });
    }
    return NextResponse.json({ success: true, articles });
  } catch (error: any) {
    return handleError(error);
  }
}

export const revalidate = 0;
