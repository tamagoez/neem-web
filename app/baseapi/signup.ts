import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const headersList = headers();
  const referer = headersList.get("referer");

  const res = await request.json();
  console.log(referer);
  return NextResponse.json({ res });
}
