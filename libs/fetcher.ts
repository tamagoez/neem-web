const baseAPIKEY = process.env.NEXT_PUBLIC_BASE_API_KEY;
const baseAPIID = process.env.NEXT_PUBLIC_BASE_API_ID;

export const getFetcher = (url) => fetch(url).then((r) => r.json());
export const postFetcher = ([url, token]) =>
  fetch(url, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ apikey: baseAPIKEY, apiid: baseAPIID, ...token }),
  }).then((r) => r.json());
