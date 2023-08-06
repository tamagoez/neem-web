"use server";

import { issueSignup } from "../../scripts/base/issue";

async function issueSignupServer() {
  const data = await issueSignup();
  return data;
}
