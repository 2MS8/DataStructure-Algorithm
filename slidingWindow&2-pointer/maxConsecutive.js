// 1004. Max Consecutive Ones III
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

// Example 1:

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
// Example 2:

// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

// function maxConsecutive(arr, k) {
//   let i = 0,
//     j = 0,
//     originalK = k,
//     indexes = [],
//     maxLen = -Infinity;
//   while (j < arr.length) {
//     if (arr[j] === 0) {
//       if (originalK > 0) {
//         indexes.push(j);
//         originalK--;
//       } else {
//         i = indexes[0] + 1;
//         indexes.shift();
//         // originalK++;
//       }
//     }
//     // console.log(j - i, "gap");
//     maxLen = Math.max(maxLen, j - i + 1);
//     j++;
//   }
//   return maxLen;
// }
console.log(maxConsecutive([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
console.log(
  maxConsecutive([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
);
//THIS IS CHATGPT ANSWER
function maxConsecutive(arr, k) {
  let i = 0,
    maxLen = 0;
  const indexes = [];

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === 0) {
      indexes.push(j);
    }

    if (indexes.length > k) {
      i = indexes.shift() + 1;
    }

    maxLen = Math.max(maxLen, j - i + 1);
  }

  return maxLen;
}
