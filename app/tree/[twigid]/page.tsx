import { Suspense } from "react";

export default async function ArticleDetail({
    params,
  }: {
    params: { twigid: number };
  }) {
  
  
    return (
      <div>

        <h2>Comments</h2>
        <Suspense fallback={<div>Loading leaves...</div>}>
          {/* @ts-expect-error 現状は jsx が Promise を返すと TypeScript が型エラーを報告するが、将来的には解決される */}
          <Comments commentPromise={commentPromise} />
        </Suspense>
      </div>
    );
  }