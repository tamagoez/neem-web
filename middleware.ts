import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  // const supabase = createMiddlewareClient({ req, res });
  // await supabase.auth.getSession();
  if (
    req.nextUrl.pathname.startsWith("/login")
  ) {
    return NextResponse.redirect(new URL(`/auth?authmode=login`, req.url));
  }
  if (
    req.nextUrl.pathname.startsWith("/signup")
  ) {
    return NextResponse.redirect(new URL(`/auth?authmode=signup`, req.url));
  }
  if (req.nextUrl.pathname.startsWith("/@")) {
    const username = req.nextUrl.pathname.slice(2)
    return NextResponse.rewrite(new URL("/user/${username}", req.url));
  }
  return res;
}
