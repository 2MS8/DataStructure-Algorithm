// 3381. Maximum Subarray Sum With Length Divisible by K
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You are given an array of integers nums and an integer k.

// Return the maximum sum of a subarray of nums, such that the size of the subarray is divisible by k.

// Example 1:

// Input: nums = [1,2], k = 1

// Output: 3

// Explanation:

// The subarray [1, 2] with sum 3 has length equal to 2 which is divisible by 1.

// Example 2:

// Input: nums = [-1,-2,-3,-4,-5], k = 4

// Output: -10

// Explanation:

// The maximum sum subarray is [-1, -2, -3, -4] which has length equal to 4 which is divisible by 4.

// Example 3:

// Input: nums = [-5,1,2,-3,4], k = 2

// Output: 4

// Explanation:

// The maximum sum subarray is [1, 2, -3, 4] which has length equal to 4 which is divisible by 2.

function maxSum(arr, k) {
  let mx = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      let len = j - i + 1;
      sum += arr[j];
      // console.log(i, j, len, "checking");
      if (len % k == 0) {
        mx = Math.max(mx, sum);
      }
    }
  }
  return mx;
}
// console.log(maxSum([-1, -2, -3, -4, -5], 4));
// console.log(maxSum([1, 2], 1));

function optimal(arr, k) {}
//UNSOLVED
