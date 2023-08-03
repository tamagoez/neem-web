import useSWR from "swr";
const baseAPIURL = process.env.NEXT_PUBLIC_BASE_API_URL;

const generateUrl = (url: string) => `${baseAPIURL}${url}`;

export function makeBaseOID(serverOID: string, type: number) {
  return false;
}

export function deleteBaseOID(serverOID: string) {
  return false;
}
