//  Find All Anagrams in a String
// Medium
// Topics
// premium lock icon
// Companies
// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

// Example 1:

// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

function anagram(s, p) {
  if (s.length < p.length) return [];

  let pHash = new Map();
  for (let i = 0; i < p.length; i++) {
    pHash.set(p[i], (pHash.get(p[i]) || 0) + 1);
  }

  let sHash = new Map();
  let start = 0,
    ans = [];

  for (let i = 0; i < s.length; i++) {
    if (!pHash.get(s[i])) {
      start = i + 1;
      sHash = new Map();
      continue;
    }
    sHash.set(s[i], (sHash.get(s[i]) || 0) + 1);
    while (sHash.get(s[i]) > pHash.get(s[i])) {
      sHash.set(s[start], sHash.get(s[start]) - 1);
      if (sHash.get(s[start]) <= 0) sHash.delete(s[start]);
      start++;
    }
    if (pHash.size == sHash.size) {
      let isMatch = true;
      for (let [key, value] of sHash) {
        if (pHash.get(key) != value) isMatch = false;
      }
      if (isMatch) {
        ans.push(start);
        sHash.set(s[start], sHash.get(s[start]) - 1);
        if (sHash.get(s[start]) <= 0) sHash.delete(s[start]);
        start++;
      }
    }
  }
  return ans;
}
console.log(anagram("abab", "ab"));
// s = "cbaebabacd", p = "abc"
console.log(anagram("cbaebabacd", "abc"));
