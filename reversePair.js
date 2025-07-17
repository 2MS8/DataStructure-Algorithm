// 493. Reverse Pairs
// Hard
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer array nums, return the number of reverse pairs in the array.

// A reverse pair is a pair (i, j) where:

// 0 <= i < j < nums.length and
// nums[i] > 2 * nums[j].

// Example 1:

// Input: nums = [1,3,2,3,1]
// Output: 2
// Explanation: The reverse pairs are:
// (1, 4) --> nums[1] = 3, nums[4] = 1, 3 > 2 * 1
// (3, 4) --> nums[3] = 3, nums[4] = 1, 3 > 2 * 1
// Example 2:

// Input: nums = [2,4,3,5,1]
// Output: 3
// Explanation: The reverse pairs are:
// (1, 4) --> nums[1] = 4, nums[4] = 1, 4 > 2 * 1
// (2, 4) --> nums[2] = 3, nums[4] = 1, 3 > 2 * 1
// (3, 4) --> nums[3] = 5, nums[4] = 1, 5 > 2 * 1

let arr = [1, 3, 2, 3, 1];
//OPTIMAL SOLUTION
for (let i = 0; i < arr.length; i++) {
  let sortedArr = arr.slice(i + 1, arr.length);
  let m = new Map();
  sortedArr = sortedArr.sort((a, b) => {
    if (m.get(a)) {
      m.set(a, m.get(a) + 1);
    } else {
      m.set(a, 1);
    }
    return a - b;
  });
  console.log(sortedArr, "sortedarrays");
  console.log(m, "map");
}

// BRUTE FORCE
// let reversePair = [],
//   ans = 0;
// for (let i = 0; i < arr.length; i++) {
//   let num = arr[i];
//   for (let j = i + 1; j < arr.length; j++) {
//     if (num > arr[j] * 2) {
//       ans++;
//       console.log(i, j);
//     }
//   }
// }
// console.log(ans);
