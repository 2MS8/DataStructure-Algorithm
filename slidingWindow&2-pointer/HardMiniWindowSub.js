// 76. Minimum Window Substring
// Hard
// Topics
// premium lock icon
// Companies
// Hint
// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

// function hard(s, t) {
//   if (s.length < t.length) return "";
//   if (s.length == t.length && s == t) return s;
//   if ((s.length == t.length) & (s != t)) return "";
//   let i = 0,
//     j = 0;
//   let mp = new Map();
//   let count = Infinity;
//   let ans = "";
//   while (j < s.length) {
//     mp.set(s[j], (mp.get(s[j]) || 0) + 1);

//     while (doesMapHas(t, mp)) {
//       if (count > j - i + 1) {
//         ans = s.slice(i, j + 1);
//         count = j - i + 1;
//       }
//       mp.set(s[i], mp.get(s[i]) - 1);
//       if (!mp.get(s[i])) mp.delete(s[i]);
//       i++;
//     }
//     j++;
//   }
//   return ans;
// }
// function doesMapHas(str, mp) {
//   let freq = new Map();
//   for (let ch of str) {
//     freq.set(ch, (freq.get(ch) || 0) + 1);
//   }

//   for (let [ch, cnt] of freq) {
//     if (!mp.has(ch) || mp.get(ch) < cnt) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(hard("ADOBECODEBANC", "ABC"));
// console.log(hard("a", "a"));
// console.log(hard("ab", "a"));
// console.log(hard("abc", "cba"));

// if (mp.get("A") && mp.get("B") && mp.get("C")) {
// if (doesMapHas(t, mp)) {
//   if (count > j - i + 1) {
//     ans = "";
//     for (let m = i; m <= j; m++) {
//       ans += s[m];
//     }
//   }
//   count = Math.min(count, j - i + 1);
//   mp.set(s[i], mp.get(s[i]) - 1);
//   if (!mp.get(s[i])) mp.delete(s[i]);
//   i++;
//   //   while (s[i] != "A" && s[i] != "B" && s[i] != "C") {
//   while (i < s.length && !t.includes(s[i])) {
//     mp.set(s[i], mp.get(s[i]) - 1);
//     if (!mp.get(s[i])) mp.delete(s[i]);
//     i++;
//   }
// }
function hard(s, t) {
  if (s.length < t.length) return "";
  if (s.length == t.length && s == t) return s;
  //   if ((s.length == t.length) & (s != t)) return "";

  let freq = new Map();
  for (let ch of t) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
  }

  let i = 0,
    j = 0;
  let mp = new Map();
  let count = Infinity;
  let ans = "";

  while (j < s.length) {
    mp.set(s[j], (mp.get(s[j]) || 0) + 1);

    while (doesMapHas(freq, mp)) {
      if (count > j - i + 1) {
        ans = s.slice(i, j + 1);
        count = j - i + 1;
      }
      mp.set(s[i], mp.get(s[i]) - 1);
      if (!mp.get(s[i])) mp.delete(s[i]);
      i++;
    }
    j++;
  }
  return ans;
}

function doesMapHas(mpNeed, mpWindow) {
  for (let [ch, cnt] of mpNeed) {
    if ((mpWindow.get(ch) || 0) < cnt) {
      return false;
    }
  }
  return true;
}

console.log(hard("ADOBECODEBANC", "ABC"));
console.log(hard("a", "a"));
console.log(hard("ab", "a"));
console.log(hard("abc", "cba"));