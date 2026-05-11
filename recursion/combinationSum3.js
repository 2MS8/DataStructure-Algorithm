// 216. Combination Sum III
// Medium
// Topics
// premium lock icon
// Companies
// Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

// Only numbers 1 through 9 are used.
// Each number is used at most once.
// Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

// Example 1:

// Input: k = 3, n = 7
// Output: [[1,2,4]]
// Explanation:
// 1 + 2 + 4 = 7
// There are no other valid combinations.
// Example 2:

// Input: k = 3, n = 9
// Output: [[1,2,6],[1,3,5],[2,3,4]]
// Explanation:
// 1 + 2 + 6 = 9
// 1 + 3 + 5 = 9
// 2 + 3 + 4 = 9
// There are no other valid combinations.
// Example 3:

// Input: k = 4, n = 1
// Output: []
// Explanation: There are no valid combinations.
// Using 4 different numbers in the range [1,9], the smallest sum we can get is 1+2+3+4 = 10 and since 10 > 1, there are no valid combination.

//------------------------------TLE----------------------
// let k = 4,
//   n = 1;
// let globalArr = [],
//   s = new Set();
// function combination(arr, sum, index) {
//   //   console.log(index, "index");
//   if (sum > n) return;
//   if (sum == n && arr.length == k) {
//     if (!s.has(arr.sort().toString())) {
//       let m = new Map();
//       for (let i = 0; i < arr.length; i++) {
//         if (m.has(arr[i])) return;
//         m.set(arr[i], m.get(arr[i] || 0) + 1);
//       }
//       globalArr.push(arr);
//       s.add(arr.sort().toString());
//       return;
//     }
//   }
//   if (index >= k) return;
//   for (let i = 1; i <= 9; i++) {
//     combination([...arr, i], sum + i, index + 1);
//   }
// }
// combination([], 0, 0);
// console.log(globalArr, "ans");

let k = 3,
  n = 9;
let globalArr = [],
  s = new Set();
function combination(arr, sum, index, ignorelist) {
  //   console.log(index, "index");
  if (sum > n) return;
  if (sum == n && arr.length == k) {
    if (!s.has(arr.sort().toString())) {
      globalArr.push(arr);
      s.add(arr.sort().toString());
      return;
    }
  }
  if (index >= k) return;
  for (let i = 1; i <= 9; i++) {
    if (!ignorelist.includes(i))
      combination([...arr, i], sum + i, index + 1, [...ignorelist, i]);
  }
}
combination([], 0, 0, []);
console.log(globalArr, "ans");
