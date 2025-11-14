// 40. Combination Sum II
// Medium
// Topics
// premium lock icon
// Companies
// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output:
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]
// Example 2:

// Input: candidates = [2,5,2,1,2], target = 5
// Output:
// [
// [1,2,2],
// [5]
// ]
let garr = [2, 5, 2, 1, 2],
  target = 5;
ans = [];
garr = garr.sort((a, b) => a - b);
console.log(garr, "sorteds");
let s = new Set();
function combination(arr, sum, index) {
  if (sum > target) return;
  if (sum == target) {
    if (!s.has(arr.toString())) {
      ans.push(arr);
      s.add(arr.toString());
    }
    return;
  }
  for (let i = 0; i < garr.length; i++) {
    // console.log("inside", garr[i], arr);
    if (!arr.length || (garr[i] >= arr[arr.length - 1] && index != i)) {
      combination([...arr, garr[i]], sum + garr[i], i);
    }
  }
  return;
}

combination([], 0);
console.log(ans, "this si ans");
