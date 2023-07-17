import { makeErrorResponse } from "@/lib/utils";
import { ErrorResponse } from "@/types";
import { NextResponse } from "next/server";

export class Exception extends Error {
  code: number;
  /**
   * @param message
   * @param code
   */
  constructor(message = "Instagram Exception", code = 500) {
    super(message);
    this.code = code;
  }
}

export const handleError = (error: any) => {
  if (error instanceof Exception) {
    const errorResponse = makeErrorResponse(error.message);
    return NextResponse.json(errorResponse, { status: error.code });
  } else {
    console.error(error);
    const errorResponse = makeErrorResponse("Internal Server Error");
    return NextResponse.json(errorResponse, { status: 500 });
  }
};
