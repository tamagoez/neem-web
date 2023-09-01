// swrを使用しようかと思ったが、使い方がわからない...

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

  const requestData = {
    ...data,
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // リクエストのコンテンツタイプをJSONと指定
      Authorization: `Bearer: ${apikey}`,
    },
    body: JSON.stringify(requestData), // リクエストボディにデータをJSON形式で文字列化して設定
  };

  try {
    const response = await fetch(
      `https://neemsbase.vercel.app/api/` + mode,
      requestOptions
    );

    // エラーレスポンスを確認
    if (!response.ok) {
      throw new Error("fetch failed");
    }

    const responseData = await response.json();
    return responseData;
  } catch (error: any) {
    // エラーハンドリング
    console.error("Error: ", error);
    throw new Error(error); // 呼び出し元にエラーを伝える
  }
}
