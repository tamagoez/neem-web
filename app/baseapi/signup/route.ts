import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const headersList = headers();
  const referer = headersList.get("referer");

  const res = await request.json();
  console.log(referer);
  if (referer !== "https://neemsbase.vercel.app/")
    return NextResponse.json(
      { error: "I can't follow your request sorry" },
      {
        status: 418,
      }
    );
  // 事前に受け取っていたtokenを確認する
  // アカウントを作成する
  return NextResponse.json({}, { status: 201 });
}
