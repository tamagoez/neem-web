"use server";

// import { issueSignup } from "../../scripts/base/issue";

import { fetchBase } from "../../utils/base/sender";
import { adminDBInsert } from "../../utils/db/admincontrol";
// import { generateRandomString } from "../../utils/generate";

export async function issueSignupServer() {
  // メインのスクリプト
  try {
    // 生成
    const data = await fetchBase("signup", {});
    await adminDBInsert("signup_issue", { token: data.token }, undefined);
    return data;
    // return { token: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa" };
  } catch (error: any) {
    throw new Error(error);
  }
}
