import { makeBaseOID } from "../../libs/baseapi";
import { generateRandomString } from "../../libs/generator";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL

export async function setupSignUp() {
    const serverOID = generateRandomString(100)
    const baseOID = makeBaseOID(serverOID, 1)
    location.replace(`${baseURL}/signup?id=${baseOID.id}`)
}