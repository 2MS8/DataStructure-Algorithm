// 131. Palindrome Partitioning
// Medium
// Topics
// premium lock icon
// Companies
// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

// Example 1:

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]
// Example 2:

// Input: s = "a"
// Output: [["a"]]

// Constraints:

// 1 <= s.length <= 16
// s contains only lowercase English letters.

//-----------------------------------------found all palingdrome----------
// let ans = [],
//   s = new Set();
// function palingdrome(allowedChar, arr, level) {
//   console.log(allowedChar, arr, "checkking");
//   if (level != 0) {
//     let str = arr.join("");
//     if (str != str.split("").reverse().join("")) return;
//     if (s.has(str)) return;
//     s.add(str);
//     ans.push(arr);
//   }
//   if (!allowedChar.length) return;
//   for (let i = 0; i < allowedChar.length; i++) {
//     let passAllowedChar = allowedChar.slice(i + 1, allowedChar.length);
//     palingdrome(passAllowedChar, [...arr, allowedChar[i]], level + 1);
//   }
//   return;
// }
// palingdrome(["a", "a", "b"], [], 0);
// console.log(ans, "output");

let str = "aab";
let ans = [],
  s = new Set();
function plaingdrome(strArray) {
  console.log(strArray, "checking");
  if (checkifpalingdrome(strArray)) {
    if (s.has(strArray.join("|"))) return;
    s.add(strArray.join("|"));
    ans.push(strArray);
  }
  let lastElement = strArray[strArray.length - 1];
  if (lastElement.length == 1) return;
  let arraytopass =
    strArray.length > 1 ? strArray.slice(0, strArray.length - 1) : [];
  for (let i = 0; i < lastElement.length - 1; i++) {
    let part1 = lastElement.split("").slice(0, i + 1);
    let part2 = lastElement.split("").slice(i + 1, lastElement.length);
    plaingdrome([...arraytopass, part1.join(""), part2.join("")]);
  }
}
plaingdrome([str]);
console.log(ans, "output");
// console.log(checkifpalingdrome(["a", "abaa"]));
function checkifpalingdrome(strarr) {
  for (let i = 0; i < strarr.length; i++) {
    console.log();
    if (strarr[i] != strarr[i].split("").reverse().join("")) {
      return false;
    }
  }
  return true;
}
