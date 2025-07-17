// 18. 4Sum
// Medium
// Topics
// premium lock icon
// Companies
// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]

console.log("yes working");

let arr = [2, 2, 2, 2, 2],
  target = 8,
  ans = [];
arr = arr.sort((a, b) => a - b);
for (let i = 0; i < arr.length; i++) {
  if (i > 0 && arr[i] == arr[i - 1]) continue;
  for (let j = i + 1; j < arr.length; j++) {
    if (j > i + 1 && arr[j] == arr[j - 1]) continue;
    let left = j + 1,
      right = arr.length - 1;
    while (left < right) {
      let sum = arr[i] + arr[j] + arr[left] + arr[right];
      console.log(sum, "this is sum");
      if (sum === target) {
        ans.push([arr[i], arr[j], arr[left], arr[right]]);
        while (left < right && arr[left] == arr[left + 1]) left++;
        while (left < right && arr[right] == arr[right - 1]) right--;
        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
}
console.log(ans);
