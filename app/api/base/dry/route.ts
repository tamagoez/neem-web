"use server";

// 何も返しません
// Request Method
//
// apikey -> middleware.tsで捌く
// serverId -> サーバーを一応仕分ける

import { NextResponse } from "next/server";

export async function POST(request: Request) {
    return new NextResponse(null, {
      status: 200,
      headers: { "content-type": "application/json" },
    });
}
