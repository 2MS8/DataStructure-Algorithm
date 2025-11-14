// 567. Permutation in String
// Attempted
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false
// function permutation(s1, s2) {
//   let hash1 = new Map();
//   for (let i = 0; i < s1.length; i++) {
//     hash1.set(s1[i], (hash1.get(s1[i]) || 0) + 1);
//   }
//   //   console.log(hash1, "hash1");
//   let j = 0;
//   let hash2 = new Map(hash1);
//   //   hash2 = hash1;
//   //   console.log(hash2, "this is hash2");
//   let obj = {};
//   while (j < s2.length) {
//     if (hash2.has(s2[j])) {
//       hash2.set(s2[j], hash2.get(s2[j]) - 1);
//       if (hash2.get(s2[j]) <= 0) hash2.delete(s2[j]);
//       if (!hash2.size) return true;
//     } else {
//       if (!hash1.has(s2[j])) {
//         hash2 = new Map(hash1);
//       } else {
//         if (!obj[s2[j]]) {
//           obj[s2[j]] = 2;
//         } else {
//           obj[s2[j]] += 1;
//         }
//         console.log("inside else", obj);
//         if (hash1.get(s2[j]) < obj[s2[j]]) {
//           hash2 = new Map(hash1);
//         }
//       }
//       //   console.log(hash2, "changed", s2[j], hash1);
//     }
//     j++;
//   }
//   return false;
// }
// function permutation(s1, s2) {
//   let hash1 = new Map();
//   for (let i = 0; i < s1.length; i++) {
//     hash1.set(s1[i], (hash1.get(s1[i]) || 0) + 1);
//   }
//   //   console.log(hash1, "hash1");
//   let i = 0,
//     j = 0;
//   let hash2 = new Map();
//   while (j < s2.length) {
//     if (hash1.has(s2[j]) && hash1.get(s2[j]) > hash2.get(s2[j])) {
//       hash2.set(s2[j], (hash2.get(s2[j]) || 0) + 1);
//       j++;
//     } else {
//       while (true) {
//         console.log(i, s2[i], s2[j], "this is i");
//         if (i == 10) break;
//         if (s2[i] == s2[j]) {
//           i++;
//           break;
//         }
//         i++;
//       }
//     }
//   }
//   return false;
// }

function permutation(s1, s2) {
  if (s2.length < s1.length) return false;
  let hash1 = new Map();
  for (let i = 0; i < s1.length; i++) {
    hash1.set(s1[i], (hash1.get(s1[i]) || 0) + 1);
  }

  let hash2 = new Map(),
    start = 0;
  for (let i = 0; i < s2.length; i++) {
    if (!hash1.has(s2[i])) {
      start = i + 1;
      hash2 = new Map();
      continue;
    }
    hash2.set(s2[i], (hash2.get(s2[i]) || 0) + 1);
    // if(hash2.get(s2[i]) > hash1.get(s2[i])){
    // console.log(hash2.size, hash1.size, "hash2andhash2");
    while (hash2.get(s2[i]) > hash1.get(s2[i])) {
      hash2.set(s2[start], hash2.get(s2[start]) - 1);
      if (hash2.get(s2[start]) <= 0) hash2.delete(s2[start]);
      start++;
    }
    if (hash1.size == hash2.size) {
      //   console.log(hash1, hash2, "hashes");
      let isTrue = true;
      for (let [key, value] of hash2) {
        // console.log(key, value, "keyvalue", hash1.size, hash2.size);
        if (!hash1.has(key) || hash1.get(key) != value) isTrue = false;
      }
      if (isTrue) return true;
    }
    // }
  }
  return false;
  //   console.log(hash2, "outside");
  //   if (!hash2.size) return false;
  //   for (let [key, value] of hash2) {
  //     console.log(key, value, "keyvalue");
  //     if (!hash1.has(key) || hash1.get(key) != value) return false;
  //   }
  //   return true;
}
console.log(permutation("ab", "eidbaooo"));
console.log(permutation("ab", "eidboaoo"));
console.log(permutation("hello", "ooolleoooleh"));
console.log(permutation("abc", "babc"));
