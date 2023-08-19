"use server";

import { fetchBase } from "../../utils/base/sender";
import { generateRandomString } from "../../utils/generate";

export async function issueSignup() {
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
