// String to Integer (atoi)
// Medium
// Topics
// premium lock icon
// Companies
// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

// The algorithm for myAtoi(string s) is as follows:

// Whitespace: Ignore any leading whitespace (" ").
// Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
// Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
// Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
// Return the integer as the final result.

// Example 1:

// Input: s = "42"

// Output: 42

// Explanation:

// The underlined characters are what is read in and the caret is the current reader position.
// Step 1: "42" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "42" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "42" ("42" is read in)
//            ^
// Example 2:

// Input: s = " -042"

// Output: -42

// Explanation:

// Step 1: "   -042" (leading whitespace is read and ignored)
//             ^
// Step 2: "   -042" ('-' is read, so the result should be negative)
//              ^
// Step 3: "   -042" ("042" is read in, leading zeros ignored in the result)
//                ^
// Example 3:

// Input: s = "1337c0d3"

// Output: 1337

// Explanation:

// Step 1: "1337c0d3" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "1337c0d3" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "1337c0d3" ("1337" is read in; reading stops because the next character is a non-digit)
//              ^
// Example 4:

// Input: s = "0-1"

// Output: 0

// Explanation:

// Step 1: "0-1" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "0-1" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "0-1" ("0" is read in; reading stops because the next character is a non-digit)
//           ^
// Example 5:

// Input: s = "words and 987"

// Output: 0

// Explanation:

// Reading stops at the first non-digit character 'w'.

// let s = " 42 ";

// function myAtoi(s) {
//   let i = 0,
//     n = s.length,
//     sign = 1,
//     result = 0;
//   s = s.trim();
//   while (i < n && s[i] === " ") {
//     i++;
//   }

//   if (i < n && (s[i] === "-" || s[i] === "+")) {
//     sign = s[i] === "-" ? -1 : 1;
//     i++;
//   }
//   while (i < n && s[i] >= "0" && s[i] <= "9") {
//     const digit = s[i] - "0";

//     if (
//       result > (Math.pow(2, 31) - 1) / 10 ||
//       (result === (Math.pow(2, 31) - 1) / 10 && digit > 7)
//     ) {
//       return sign === 1 ? Math.pow(2, 31) - 1 : -Math.pow(2, 31);
//     }
//     result = result * 10 + digit;
//     i++;
//   }

//   return result * sign;
// }

// 1781. Sum of Beauty of All Substrings
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// The beauty of a string is the difference in frequencies between the most frequent and least frequent characters.

// For example, the beauty of "abaacc" is 3 - 1 = 2.
// Given a string s, return the sum of beauty of all of its substrings.

// Example 1:

// Input: s = "aabcb"
// Output: 5
// Explanation: The substrings with non-zero beauty are ["aab","aabc","aabcb","abcb","bcb"], each with beauty equal to 1.
// Example 2:

// Input: s = "aabcbaa"
// Output: 17
let s = "aabcbaa";
console.log(findBeauty(s));
function findBeauty(str) {
  let n = str.length;
  let arr = [];
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let s = "";
      //   let m = new Map();
      let obj = {};
      for (let k = i; k <= j; k++) {
        // m.set(str[k], (m.get(str[k]) || 0) + 1);
        if (obj.hasOwnProperty(str[k])) {
          obj[str[k]] += 1;
        } else {
          obj[str[k]] = 1;
        }
      }
      let mandm = findMAxAndMin(obj);

      arr.push(mandm.max - mandm.min);

      console.log(obj, "object");
    }
  }
  return arr.reduce((e, i) => e + i, 0);
}
function findMAxAndMin(obj) {
  let max = -Infinity;
  let min = Infinity;
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
    }
    if (obj[key] < min) {
      min = obj[key];
    }
  }
  return { max, min };
}
