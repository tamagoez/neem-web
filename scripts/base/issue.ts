import { fetchBase } from "../../utils/base/sender";

export async function issueSignup() {
  try {
    const data = await fetchBase("signup", {
      secret: generateSecureRandomString(50),
    });
    return data.token;
  } catch (error: any) {
    throw new Error(error);
  }
}
