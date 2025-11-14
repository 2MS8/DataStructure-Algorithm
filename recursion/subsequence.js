// // Find all subsequence of a array

// let grr = [7, 10, 7, 3, 7, 5, 4];
// let output = [];
// function subsequence(arr, index) {
//   if (index == grr.length) {
//     output.push(arr);
//     return;
//   }
//   subsequence([...arr, grr[index]], index + 1);
//   subsequence(arr, index + 1);
//   return;
// }

// subsequence([], 0);
// let s = new Set();
// for (let i = 0; i < output.length; i++) {
//   let curr = output[i].toString();
//   s.add(curr);
// }
// console.log(output.length, s.size, "this is output");

// ----------------------------------------

// 1498. Number of Subsequences That Satisfy the Given Sum Condition
// Attempted
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You are given an array of integers nums and an integer target.

// Return the number of non-empty subsequences of nums such that the sum of the minimum and maximum element on it is less or equal to target. Since the answer may be too large, return it modulo 109 + 7.

// Example 1:

// Input: nums = [3,5,6,7], target = 9
// Output: 4
// Explanation: There are 4 subsequences that satisfy the condition.
// [3] -> Min value + max value <= target (3 + 3 <= 9)
// [3,5] -> (3 + 5 <= 9)
// [3,5,6] -> (3 + 6 <= 9)
// [3,6] -> (3 + 6 <= 9)
// Example 2:

// Input: nums = [3,3,6,8], target = 10
// Output: 6
// Explanation: There are 6 subsequences that satisfy the condition. (nums can have repeated numbers).
// [3] , [3] , [3,3], [3,6] , [3,6] , [3,3,6]
// Example 3:

// Input: nums = [2,3,3,4,6,7], target = 12
// Output: 61
// Explanation: There are 63 non-empty subsequences, two of them do not satisfy the condition ([6,7], [7]).
// Number of valid subsequences (63 - 2 = 61).
let grr = [2, 3, 3, 4, 6, 7],
  target = 12;
grr = grr.sort((a, b) => a - b);
// let grr = [7, 10, 7, 3, 7, 5, 4];

let ans = 0;
const MOD = 1e9 + 7;
let s = new Set();
function subsequence(arr, index) {
  if (index === grr.length) {
    if (arr.length === 0) return;
    let minVal = Math.min(...arr);
    let maxVal = Math.max(...arr);
    if (minVal + maxVal <= target) ans = (ans + 1) % MOD;
    return;
  }
  subsequence([...arr, grr[index]], index + 1);
  subsequence(arr, index + 1);
  return;
}

subsequence([], 0);
console.log(ans, "this is output");
