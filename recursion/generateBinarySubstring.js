// 3211. Generate Binary Strings Without Adjacent Zeros
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You are given a positive integer n.

// A binary string x is valid if all substrings of x of length 2 contain at least one "1".

// Return all valid strings with length n, in any order.

// Example 1:

// Input: n = 3

// Output: ["010","011","101","110","111"]

// Explanation:

// The valid strings of length 3 are: "010", "011", "101", "110", and "111".

// Example 2:

// Input: n = 1

// Output: ["0","1"]

// Explanation:

// The valid strings of length 1 are: "0" and "1".
let ans = [],
  n = 3;
function para(str, len) {
  console.log(str, len, "testing");
  if (str.length && str[str.length - 1] == "0" && str[str.length - 2] == "0")
    return;
  if (len == n) {
    ans.push(str);
    return;
  }
  //   } else {
  para(str + "0", len + 1);
  console.log(str, "second pass");
  para(str + "1", len + 1);
  //   }
  return;
}
para("", 0);
console.log(ans);
