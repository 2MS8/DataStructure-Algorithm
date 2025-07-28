// 209. Minimum Size Subarray Sum
// Medium
// Topics
// premium lock icon
// Companies
// Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

// let arr = [2, 3, 1, 2, 4, 3],
//   target = 7;
// let ans = +Infinity;
// for (let k = 0; k < arr.length; k++) {
//   for (let i = 0; i < arr.length; i++) {
//     let s = 0,
//       c = 0;
//     for (let j = i; j < arr.length; j++) {
//       s += arr[j];
//       c++;
//       if (s >= target) {
//         break;
//       }
//     }
//     ans = Math.min(ans, c);
//   }
// }
// console.log(ans);
