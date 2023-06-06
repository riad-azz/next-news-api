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
    return NextResponse.json({ error: error.message }, { status: error.code });
  } else {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
