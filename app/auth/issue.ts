"use server";

import { issueSignup } from "../../scripts/base/issue";

export async function issueSignupServer() {
  // サーバーで実行するためのfunction
  const data = await issueSignup();
  return data;
}
