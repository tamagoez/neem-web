export async function validateKey(key: string) {
   // 事前にサーバーに割り当てられた、fetch送ってきたアクセス元確認用のkey
  const serverkey = process.env.NEXT_PUBLIC_SERVER_KEY;

  if (key === serverkey) return true;
  return false;
}
