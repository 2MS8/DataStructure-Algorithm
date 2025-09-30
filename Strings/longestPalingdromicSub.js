// 5. Longest Palindromic Substring
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

function longestSub(str) {
  let finalAnswer = {};
  for (let i = 0; i < str.length; i++) {
    let subStr = "";
    let ans = {};
    for (let j = i; j < str.length; j++) {
      subStr += str[j];
      let bol = checkPalingdrome(subStr);
      if (bol) {
        console.log("true for", subStr, subStr.length);
        if (ans.val && ans.len) {
          if (subStr.length > ans.len) {
            ans.len = subStr.length;
            ans.val = subStr;
          }
        } else {
          ans.val = subStr;
          ans.len = subStr.length;
        }
      }
    }
    if (Object.keys(finalAnswer).length) {
      if (finalAnswer.len < ans.len) {
        finalAnswer.len = ans.len;
        finalAnswer.val = ans.val;
      }
    } else {
      finalAnswer.len = ans.len;
      finalAnswer.val = ans.val;
    }
  }

  return finalAnswer;
}
function checkPalingdrome(subStr) {
  //   console.log(subStr, "substrings");
  let original = subStr;
  subStr = subStr.split("").reverse().join("");
  if (original == subStr) return true;
  return false;
}

console.log(longestSub("cbbd"));
