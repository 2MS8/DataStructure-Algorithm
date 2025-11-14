// 190. Reverse Bits
// Easy
// Topics
// premium lock icon
// Companies
// Reverse bits of a given 32 bits signed integer.

// Example 1:

// Input: n = 43261596

// Output: 964176192

function manipulate(n) {
  let str = "",
    num = n;
  while (num) {
    str += num % 2;
    num = parseInt(num / 2);
  }
  if (str.length < 32) {
    while (str.length != 32) {
      str += "0";
    }
  }
  str = str.split("").reverse().join("");
  let ans = 0;
  for (let i = 0; i < str.length; i++) {
    ans += parseInt(str[i]) * Math.pow(2, i);
  }
  return ans;
}
console.log(manipulate(43261596));
// 00000010100101000001111010011100
// 00000010100101000001111010011100
