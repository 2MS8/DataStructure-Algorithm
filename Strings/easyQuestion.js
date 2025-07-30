// 1903. Largest Odd Number in String
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

// A substring is a contiguous sequence of characters within a string.

// Example 1:

// Input: num = "52"
// Output: "5"
// Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
// Example 2:

// Input: num = "4206"
// Output: ""
// Explanation: There are no odd numbers in "4206".
// Example 3:

// Input: num = "35427"
// Output: "35427"
// Explanation: "35427" is already an odd number.

// let str = "4206";
// let index = -1;

// for (let i = str.length - 1; i >= 0; i--) {
//   let num = parseInt(str[i]);
//   if (num % 2 !== 0) {
//     index = i;
//     break;
//   }
// }
// if (index > -1) {
//   str = str.split("");
//   str = str.slice(0, index + 1);
//   str = str.join("");
// } else {
//   str = "";
// }

// console.log(str);

//*************new question**************//

// Example 1:

// Input: s = "abcde", goal = "cdeab"
// Output: true
// Example 2:

// Input: s = "abcde", goal = "abced"
// Output: false

// let s = "abcde",
//   goal = "abced";
// function check(s, goal) {
//   if (s.length != goal.length) return false;
//   for (let i = 0; i < s.length; i++) {
//     let rotated = s.slice(i) + s.slice(0, i);
//     if (rotated == goal) {
//       return true;
//     }
//   }
//   return false;
// }

// 205. Isomorphic Strings
// Easy
// Topics
// premium lock icon
// Companies
// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"

// Output: true

// Explanation:

// The strings s and t can be made identical by:

// Mapping 'e' to 'a'.
// Mapping 'g' to 'd'.
// Example 2:

// Input: s = "foo", t = "bar"

// Output: false

// Explanation:

// The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

// Example 3:

// Input: s = "paper", t = "title"

// Output: true

// let s = "badc",
//   t = "baba";
// console.log(getanswer(s, t));
// function getanswer(s, t) {
//   if (s.length != t.length) return false;
//   let m = new Map();
//   for (let i = 0; i < s.length; i++) {
//     if (m.get(s[i])) {
//       let item = m.get(s[i]);
//       if (item != t[i]) {
//         return false;
//       }
//     } else {
//       for (let [key, value] of m) {
//         if (value == t[i]) {
//           return false;
//         }
//       }
//       m.set(s[i], t[i]);
//     }
//   }
//   return true;
// }
// let str = "babad";
// let left = 0,
//   right = str.length - 1;

// for (let i = 0; i < str.length; i++) {
//   (left = i), (right = str.length - 1);
//   while (left < right) {
//     if (str[left] != str[right]) {
//       left = i;
//       right--;
//     } else {
//       left++;
//       right--;
//     }
//   }
//   console.log(
//     str
//       .split("")
//       .slice(i, right + 1)
//       .join("")
//   );
// }

// 451. Sort Characters By Frequency
// Medium
// Topics
// premium lock icon
// Companies
// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.

// Example 1:

// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input: s = "cccaaa"
// Output: "aaaccc"
// Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
// Note that "cacaca" is incorrect, as the same characters must be together.
// Example 3:

// Input: s = "Aabb"
// Output: "bbAa"
// Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.

// *********COORECT ANSWER SOMETIMES IM SMART (QUESTION MIGHT BE EASY) BUT IT WAS MEDIUM ON LEETCODE***//
// let str = "tree";

// function getanswer() {
//   let m = new Map();
//   for (let i = 0; i < str.length; i++) {
//     m.set(str[i], (m.get(str[i]) || 0) + 1);
//   }

//   let arr = [];
//   for (let [key, val] of m) {
//     arr.push({ key, val });
//   }
//   arr.sort((a, b) => b.val - a.val);
//   let ans = "";
//   arr.forEach((e) => {
//     if (e.val > 1) {
//       for (let i = 0; i < e.val; i++) {
//         ans += e.key;
//       }
//     } else {
//       ans += e.key;
//     }
//   });
//   return ans;
// }
// 1614. Maximum Nesting Depth of the Parentheses
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a valid parentheses string s, return the nesting depth of s. The nesting depth is the maximum number of nested parentheses.

// Example 1:

// Input: s = "(1+(2*3)+((8)/4))+1"

// Output: 3

// Explanation:

// Digit 8 is inside of 3 nested parentheses in the string.

// Example 2:

// Input: s = "(1)+((2))+(((3)))"

// Output: 3

// Explanation:

// Digit 3 is inside of 3 nested parentheses in the string.

// Example 3:

// Input: s = "()(())((()()))"

// Output: 3

let s = "(1+(2*3)+((8)/4))+1";
console.log(maxDepth(s));
function maxDepth(s) {
  let ans = 0;

  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      stack.push(s[i]);
    } else if (s[i] == ")") {
      ans = Math.max(ans, stack.length);
      stack.pop();
    }
  }
  return ans;
}
