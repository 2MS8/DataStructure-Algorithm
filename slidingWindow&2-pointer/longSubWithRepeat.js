// 3. Longest Substring Without Repeating Characters
// Attempted
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s, find the length of the longest substring without duplicate characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
function trimObject(obj, keyToKeep) {
  let found = false;
  let newObj = {};

  for (let [key, value] of Object.entries(obj)) {
    if (found) newObj[key] = value;
    if (key === keyToKeep) found = true;
  }

  return newObj;
}
function longestSub(s) {
  let m = {};
  let i = 0,
    j = 0,
    maxLen = -Infinity;

  while (j < s.length) {
    if (m[s[j]]) {
      m = trimObject(m, s[j]);
      m[s[j]] = 1;
    } else {
      m[s[j]] = 1;
    }
    j++;
    maxLen = Math.max(maxLen, Object.keys(m).length);
  }
  return maxLen;
}
console.log(longestSub("pwwkew"));
console.log(longestSub("abcabcbb"));
