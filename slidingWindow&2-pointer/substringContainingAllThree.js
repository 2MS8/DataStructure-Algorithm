// 1358. Number of Substrings Containing All Three Characters
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s consisting only of characters a, b and c.

// Return the number of substrings containing at least one occurrence of all these characters a, b and c.

// Example 1:

// Input: s = "abcabc"
// Output: 10
// Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again).
// Example 2:

// Input: s = "aaacb"
// Output: 3
// Explanation: The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb".
// Example 3:

// Input: s = "abc"
// Output: 1

// function substringthree(string) {
//   let i = 0,
//     j = 0,
//     count = 0;
//   let mp = new Map();
//   while (j < string.length) {
//     mp.set(string[j], (mp.get(string[j]) || 0) + 1);
//     if (mp.get("a") && mp.get("b") && mp.get("c")) {
//       console.log("inside if", mp);
//       count++;
//       count += string.length - 1 - j;
//       mp.set(string[i], mp.get(string[i]) - 1);
//       i++;
//     } else {
//       j++;
//     }
//     // console.log(mp, "map");
//   }
//   return count;
// }
function substringthree(s) {
  let i = 0,
    j = 0,
    count = 0;
  let mp = new Map();

  while (j < s.length) {
    mp.set(s[j], (mp.get(s[j]) || 0) + 1);

    while (mp.get("a") && mp.get("b") && mp.get("c")) {
      count += s.length - j;
      mp.set(s[i], mp.get(s[i]) - 1);
      if (mp.get(s[i]) === 0) mp.delete(s[i]);
      i++;
    }
    // console.log(j)
    j++;
  }

  return count;
}

let a = substringthree("aaacb");
console.log(a, "answer");
