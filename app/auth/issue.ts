"use server";

// import { issueSignup } from "../../scripts/base/issue";

import { fetchBase } from "../../utils/base/sender";
import { generateRandomString } from "../../utils/generate";

export async function issueSignupServer() {
  // メインのスクリプト
  try {
    // 生成
    const data = await fetchBase("signup", {
      secret: generateRandomString(50),
    });
    return data.token;
  } catch (error: any) {
    throw new Error(error);
  }
}
