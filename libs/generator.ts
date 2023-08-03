export function generateRandomString(length: number) {
  // 安全で偏りのない乱数生成器の作成
  var array = new Uint32Array(length);
  window.crypto.getRandomValues(array);

  // 使用可能な文字セットの作成
  var charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  var result = "";

  // 乱数を使用して文字列を作成する
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor((array[i] / 255) * charset.length);
    result += charset[randomIndex];
  }

  return result;
}
