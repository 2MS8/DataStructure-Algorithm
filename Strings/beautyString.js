// /**
//  * @param {string} s
//  * @return {number}
//  */
// var beautySum = function (s) {
//   return findBeauty(s);
//   function findBeauty(str) {
//     let n = str.length;
//     let arr = [];
//     for (let i = 0; i < n; i++) {
//       for (let j = i; j < n; j++) {
//         let s = "";
//         //   let m = new Map();
//         let obj = {};
//         for (let k = i; k <= j; k++) {
//           // m.set(str[k], (m.get(str[k]) || 0) + 1);
//           if (obj.hasOwnProperty(str[k])) {
//             obj[str[k]] += 1;
//           } else {
//             obj[str[k]] = 1;
//           }
//         }
//         let mandm = findMAxAndMin(obj);

//         arr.push(mandm.max - mandm.min);

//         console.log(obj, "object");
//       }
//     }
//     return arr.reduce((e, i) => e + i, 0);
//   }
//   function findMAxAndMin(obj) {
//     let max = -Infinity;
//     let min = Infinity;
//     for (let key in obj) {
//       if (obj[key] > max) {
//         max = obj[key];
//       }
//       if (obj[key] < min) {
//         min = obj[key];
//       }
//     }
//     return { max, min };
//   }
// };

// 1781. Sum of Beauty of All Substrings
// Attempted
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

function beautySum(s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let map = {};
    for (let j = i; j < s.length; j++) {
      if (map[s[j]]) {
        map[s[j]] += 1;
      } else {
        map[s[j]] = 1;
      }
      let { mx, mn } = findMinMax(map);
      console.log("maxminDiff", mx - mn);
      sum += mx - mn;
    }
  }
  return sum;
}
function findMinMax(obj) {
  let mx = -Infinity,
    mn = Infinity;
  for (let i in obj) {
    let curr = obj[i];
    mx = Math.max(mx, curr);
    mn = Math.min(mn, curr);
  }
  return { mx, mn };
}
console.log(beautySum("aabcb"));
// console.log(findMinMax({ a: 4, b: 2, c: 1 }));
