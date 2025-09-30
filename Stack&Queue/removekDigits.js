// 402. Remove K Digits
// Medium
// Topics
// premium lock icon
// Companies
// Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.

// Example 1:

// Input: num = "1432219", k = 3
// Output: "1219"
// Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
// Example 2:

// Input: num = "10200", k = 1
// Output: "200"
// Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
// Example 3:

// Input: num = "10", k = 2
// Output: "0"
// Explanation: Remove all the digits from the number and it is left with nothing which is 0.

// Constraints:

// 1 <= k <= num.length <= 105
// num consists of only digits.
// num does not have any leading zeros except for the zero itself.
// console.log(removekStriever("1432219", 3));
console.log(removekStriever("112", 1));

function removekStriever(str, k) {
  let strInt = [];
  if (str.length <= k) return "0";
  for (let i = 0; i < str.length; i++) {
    strInt.push(parseInt(str[i]));
  }
  let stack = [];

  for (let i = 0; i < strInt.length; i++) {
    if (k <= 0) {
      if (i < strInt.length) {
        stack.push(strInt[i]);
        continue;
      }
      break;
    }
    if (i == 0) {
      stack.push(strInt[i]);
      continue;
    }
    while (strInt[i] < stack[stack.length - 1] && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(strInt[i]);
  }
  if (k != 0) {
    while (k > 0) {
      stack.pop();
      k--;
    }
  }
  return parseInt(stack.join("")).toString();
  console.log(stack, "answer");
}
function removeK(str, k) {
  let strInt = [];
  if (str.length <= k) return "0";
  for (let i = 0; i < str.length; i++) {
    strInt.push(parseInt(str[i]));
  }
  console.log(strInt, "strint");
  for (let j = 0; j < k; j++) {
    for (let i = 0; i < strInt.length; i++) {
      if (i == 0 && strInt[i] >= strInt[i + 1]) {
        strInt.splice(i, 1);
        break;
      }
      if (i == strInt.length - 1 && strInt[i] >= strInt[i - 1]) {
        strInt.splice(i, 1);
        break;
      }
      if (strInt[i] > strInt[i + 1] && strInt[i] >= strInt[i - 1]) {
        strInt.splice(i, 1);
        break;
      }
    }
  }
  return parseInt(strInt.join(""));
}
//final version
function removekStriever(str, k) {
  if (str.length <= k) return "0";

  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let digit = str[i];

    while (stack.length && k > 0 && stack[stack.length - 1] > digit) {
      stack.pop();
      k--;
    }
    stack.push(digit);
  }

  while (k > 0) {
    stack.pop();
    k--;
  }

  // remove leading zeros
  while (stack.length > 1 && stack[0] === "0") {
    stack.shift();
  }

  // if nothing left, return "0"
  return stack.length ? stack.join("") : "0";
}