// 930. Binary Subarrays With Sum
// Medium
// Topics
// premium lock icon
// Companies
// Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.
// A subarray is a contiguous part of the array.
// Example 1:
// Input: nums = [1,0,1,0,1], goal = 2
// Output: 4
// Explanation: The 4 subarrays are bolded and underlined below:
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// Example 2:
// Input: nums = [0,0,0,0,0], goal = 0
// Output: 15

// function binarySum(arr, goal) {
//   let i = 0,
//     j = 0;
//   let sum = 0,
//     ans = 0;
//   while (i < arr.length) {
//     if (arr[j]) sum++;
//     if (sum <= goal && j < arr.length) {
//       j++;
//     } else {
//       sum -= arr[i];
//       i++;
//     }
//     // console.log(i, j);
//     if (sum == goal) ans++;
//   }
//   return ans;
// }
// function binarySum(s, k) {
//   let preSum = 0;
//   let count = 0;
//   let m = new Map();
//   m.set(0, 1);
//   for (let i = 0; i < s.length; i++) {
//     console.log(m, "map");
//     if (m.has(preSum - k)) {
//       count += m.get(preSum - k);
//     }
//     preSum += s[i];
//     if (m.has(s[i])) {
//       m.set(s[i], m.get(s[i]) + 1);
//     } else {
//       m.set(s[i], 1);
//     }
//   }
//   return count;
// }
function binarySum(s, k) {
  let prefixSum = 0;
  let count = 0;
  let m = new Map();
  m.set(0, 1); // base case

  for (let i = 0; i < s.length; i++) {
    prefixSum += s[i];
    let s_minus_k = prefixSum - k;
    if (m.has(s_minus_k)) {
      count += m.get(s_minus_k);
    }
    m.set(prefixSum, (m.get(prefixSum) || 0) + 1);
  }
  return count;
}

console.log(binarySum([1, 0, 1, 0, 1], 2));
