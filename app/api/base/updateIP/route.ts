"use server";

// Request Method
//
// apikey -> middleware.tsで捌く
// serverId -> サーバーを一応仕分ける

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    return new NextResponse(JSON.stringify({ success: true, message: "ok" }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ success: false, message: error }),
      { status: 401, headers: { "content-type": "application/json" } }
    );
  }
}
