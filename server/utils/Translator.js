const BASE62 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function hexToBase62(hex) {
  let num = BigInt(hex);
  let result = "";

  while (num > 0n) {
    result = BASE62[num % 62n] + result;
    num = num / 62n;
  }

  return result;
}

function base62ToHex(base62) {
  let num = 0n;

  for (let char of base62) {
    num = num * 62n + BigInt(BASE62.indexOf(char));
  }

  return "0x" + num.toString(16);
}

function encodeBid(bid) {
  const [part1, part2] = bid.split(":");
  return `${hexToBase62(part1)}-${hexToBase62(part2)}`;
}

function decodeBid(shortId) {
  const [p1, p2] = shortId.split("-");
  return `${base62ToHex(p1)}:${base62ToHex(p2)}`;
}

module.exports = {
  encodeBid,
  decodeBid
};
