// 90. Subsets II
// Medium
// Topics
// premium lock icon
// Companies
// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:

// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
let all = [],
  nums = [4, 4, 4, 1, 4].sort(),
  s = new Set();
function subset(arr, index, data) {
  if (index == data.length) {
    if (!s.has(arr.toString())) {
      all.push(arr);
      s.add(arr.toString());
    }
    return;
  } else {
    subset([...arr, data[index]], index + 1, data);
    subset([...arr], index + 1, data);
  }
}
subset([], 0, nums);
console.log(all);
