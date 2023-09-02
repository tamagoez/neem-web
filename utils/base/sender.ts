// swrを使用しようかと思ったが、使い方がわからない...
// P.S. axiosを使用することにしたので、これを機にswrのfetcherに渡してswrしていきます
// PS PS swrサーバーサイドで使えないんですね

import { baseUrl } from "../globalvar";

import axios, { AxiosError } from "axios";
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export async function fetchBase(
  mode: string,
  data: {
    [key: string]: any;
  }
) {
  //
  // 事前にサーバーに割り当てられた、fetch送った時に同期サーバー側が確認する用
  // 絶対漏洩しないように!!!!
  const apikey = process.env.NEXT_PUBLIC_BASE_KEY;
  // 漏洩注意
  //
  // 注: process.envで環境変数にしておくこと
  // 注: .env.localをpullしたりして漏洩するケースがあることにも留意
  //       .gitignoreの設定を忘れずに

  const requestData = {
    ...data,
  };

  const requestUrl = `${baseUrl}api/` + mode;

  console.log(`${requestUrl} : ${requestData}`);
  const requestHeaders = {
    "Content-Type": "application/json", // リクエストのコンテンツタイプをJSONと指定
    Authorization: `Bearer: ${apikey}`,
  };

  try {
    const response = await axios.post(requestUrl, requestData, {
      headers: requestHeaders,
    });
    if (AxiosError) {
      new Error();
    }
    return response.data;
  } catch (error: any) {
    // エラーハンドリング
    console.error("Error: ", error);
    throw new Error(error); // 呼び出し元にエラーを伝える
  }
}
