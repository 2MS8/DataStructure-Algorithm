// 38. Count and Say
// Attempted
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

// countAndSay(1) = "1"
// countAndSay(n) is the run-length encoding of countAndSay(n - 1).
// Run-length encoding (RLE) is a string compression method that works by replacing consecutive identical characters (repeated 2 or more times) with the concatenation of the character and the number marking the count of the characters (length of the run). For example, to compress the string "3322251" we replace "33" with "23", replace "222" with "32", replace "5" with "15" and replace "1" with "11". Thus the compressed string becomes "23321511".

// Given a positive integer n, return the nth element of the count-and-say sequence.

// Example 1:

// Input: n = 4

// Output: "1211"

// Explanation:

// countAndSay(1) = "1"
// countAndSay(2) = RLE of "1" = "11"
// countAndSay(3) = RLE of "11" = "21"
// countAndSay(4) = RLE of "21" = "1211"
// Example 2:

// Input: n = 1

// Output: "1"

// Explanation:

// This is the base case.
// if (n == 1) return "1";
//GOOD WORK
function countAndSay(n, stop, str) {
  if (stop == 1) return "1";
  let s = returnRLE(str);
  console.log(s, "string", n, stop);
  if (n == stop) return s;
  return countAndSay(n + 1, stop, s);
}

// console.log(countAndSay(2, 4, "1"));

function returnRLE(str) {
  let rememberIndex = -1;
  let rle = "";
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i], "str[i]");
    if (!str[i + 1] || str[i] != str[i + 1]) {
      let len;
      if (rememberIndex < 0) {
        len = i + 1;
      } else {
        len = i - rememberIndex ? i - rememberIndex : 1;
      }
      console.log(len, i, str[i], "string");
      rle = rle + `${len}${str[i]}`;
      rememberIndex = i;
    }
  }
  return rle;
}
// console.log(returnRLE("12"));
