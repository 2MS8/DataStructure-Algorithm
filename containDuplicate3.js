// 220. Contains Duplicate III
// Hard
// Topics
// premium lock icon
// Companies
// Hint
// You are given an integer array nums and two integers indexDiff and valueDiff.
// Find a pair of indices (i, j) such that:

// i != j,
// abs(i - j) <= indexDiff.
// abs(nums[i] - nums[j]) <= valueDiff, and
// Return true if such pair exists or false otherwise.

// Example 1:

// Input: nums = [1,2,3,1], indexDiff = 3, valueDiff = 0
// Output: true
// Explanation: We can choose (i, j) = (0, 3).
// We satisfy the three conditions:
// i != j --> 0 != 3
// abs(i - j) <= indexDiff --> abs(0 - 3) <= 3
// abs(nums[i] - nums[j]) <= valueDiff --> abs(1 - 1) <= 0
// Example 2:

// Input: nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3
// Output: false
// Explanation: After trying all the possible pairs (i, j), we cannot satisfy the three conditions, so we return false.

// let nums = [1, 2, 3, 1],
//   indiff = 3,
//   valdiff = 0;
let nums = [1, 2, 2, 3, 4, 5],
  indiff = 3,
  valdiff = 0;

//   correct but giving tle
console.log(containDuplicate(nums, indiff, valdiff));
function containDuplicate(nums, indiff, valdiff) {
  let i = 0,
    j = 1,
    len = nums.length - 1;

  let s = new Map();
  s.set(nums[i], i);
  while (j <= len) {
    if (Math.abs(i - j) <= indiff && Math.abs(nums[i] - nums[j]) <= valdiff) {
      return true;
    } else {
      if (Math.abs(i - j) > indiff) {
        s.delete(nums[i]);
        i++;
      } else {
        for (let [key, value] of s) {
          if (Math.abs(key - nums[j]) <= valdiff) {
            return true;
          }
        }
        s.set(nums[j], j);
        j++;
      }
    }
  }
  return false;
}

function containsNearbyAlmostDuplicate(nums, indiff, valdiff) {
  if (valdiff < 0) return false;
  let buckets = new Map();
  let size = valdiff + 1;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let bucketId = Math.floor(num / size);
    // check current bucket
    if (buckets.has(bucketId)) return true;
    // check adjacent buckets
    if (
      buckets.has(bucketId - 1) &&
      Math.abs(num - buckets.get(bucketId - 1)) <= valdiff
    )
      return true;
    if (
      buckets.has(bucketId + 1) &&
      Math.abs(num - buckets.get(bucketId + 1)) <= valdiff
    )
      return true;
    buckets.set(bucketId, num);
    // keep the window of size indiff
    if (i >= indiff) {
      let oldBucketId = Math.floor(nums[i - indiff] / size);
      buckets.delete(oldBucketId);
    }
  }

  return false;
}
