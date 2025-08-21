// 496. Next Greater Element I
// Easy
// Topics
// premium lock icon
// Companies
// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

// Example 1:

// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
// - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// Example 2:

// Input: nums1 = [2,4], nums2 = [1,2,3,4]
// Output: [3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
// - 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is
//  -1.

// let nums1 = [2, 4],
//   nums2 = [1, 2, 3, 4];
// console.log(getNextGreater(nums1, nums2));
// function getNextGreater(arr1, arr2) {
//   let m = new Map();
//   let ans = [];
//   for (let i = 0; i < arr2.length; i++) {
//     m.set(arr2[i], i);
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let index = m.get(arr1[i]);
//     if (index != arr2.length - 1) {
//       let check = 0;
//       for (let j = index + 1; j < arr2.length; j++) {
//         if (arr2[j] > arr1[i]) {
//           ans.push(arr2[j]);
//           check = 1;
//           break;
//         }
//       }
//       if (!check) ans.push(-1);
//       //   ans.push(arr2[index + 1]);
//     } else {
//       ans.push(-1);
//     }
//   }
//   return ans;
// }

//88888888888888888888888 OTHER ONE MEDIUM QUESTION 888888888888888888888888888//

//  Next Greater Element II
// Medium
// Topics
// premium lock icon
// Companies
// Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.

// The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.

// Example 1:

// Input: nums = [1,2,1]
// Output: [2,-1,2]
// Explanation: The first 1's next greater number is 2;
// The number 2 can't find next greater number.
// The second 1's next greater number needs to search circularly, which is also 2.
// Example 2:

// Input: nums = [1,2,3,4,3]
// Output: [2,3,4,-1,4]

let nums = [1, 2, 3, 4, 3];
console.log(nextGreater2(nums));
function nextGreater2(arr) {
  let ans = [];
  let doubleArray = [...arr, ...arr];
  let len = doubleArray.length - 1,
    originalLength = arr.length - 1;
  let monoStack = [];
  while (len >= 0) {
    if (!monoStack.length) monoStack.push(doubleArray[len]);
    while (
      monoStack.length &&
      monoStack[monoStack.length - 1] <= doubleArray[len] &&
      monoStack.length
    ) {
      monoStack.pop();
    }
    if (len <= originalLength) {
      if (monoStack.length) {
        ans.push(monoStack[monoStack.length - 1]);
      } else {
        ans.push(-1);
      }
    }
    monoStack.push(doubleArray[len]);
    len--;
  }
  return ans.reverse();
}
