// 424. Longest Repeating Character Replacement
// Medium
// Topics
// premium lock icon
// Companies
// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.

// function bruteForce(s, k) {
//   let ans = -1;
//   for (let i = 0; i < s.length; i++) {
//     let hash = {};
//     for (let j = i; j < s.length; j++) {
//       if (hash[s[j]]) {
//         hash[s[j]] += 1;
//       } else {
//         hash[s[j]] = 1;
//       }
//       let mostRepeat = returnMostRepeated(hash);
//       if (j - i + 1 - mostRepeat <= k) {
//         ans = Math.max(ans, j - i + 1);
//       }
//     }
//   }
//   return ans;
// }
function optimized(s, k) {
  let i = 0,
    j = 0,
    maxLen = 0;
  let hash = {},
    check = false;
  while (j < s.length) {
    if (!check) {
      if (hash[s[j]]) {
        hash[s[j]] += 1;
      } else {
        hash[s[j]] = 1;
      }
    }
    let len = j - i + 1;

    let maxFrequency = returnMostRepeated(hash);
    if (len - maxFrequency <= k) {
      maxLen = Math.max(maxLen, len);
      j++;
      check = false;
    } else {
      hash[s[i]] -= 1;
      i++;
      check = true;
    }
  }
  return maxLen;
}
function returnMostRepeated(obj) {
  let ans = 0;
  Object.values(obj).forEach((element) => {
    ans = Math.max(ans, element);
  });
  return ans;
}
console.log(optimized("AABABBA", 1));
