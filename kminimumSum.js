// 2195. Append K Integers With Minimal Sum
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You are given an integer array nums and an integer k. Append k unique positive integers that do not appear in nums to nums such that the resulting total sum is minimum.

// Return the sum of the k integers appended to nums.

// Example 1:

// Input: nums = [1,4,25,10,25], k = 2
// Output: 5
// Explanation: The two unique positive integers that do not appear in nums which we append are 2 and 3.
// The resulting sum of nums is 1 + 4 + 25 + 10 + 25 + 2 + 3 = 70, which is the minimum.
// The sum of the two integers appended is 2 + 3 = 5, so we return 5.
// Example 2:

// Input: nums = [5,6], k = 6
// Output: 25
// Explanation: The six unique positive integers that do not appear in nums which we append are 1, 2, 3, 4, 7, and 8.
// The resulting sum of nums is 5 + 6 + 1 + 2 + 3 + 4 + 7 + 8 = 36, which is the minimum.
// The sum of the six integers appended is 1 + 2 + 3 + 4 + 7 + 8 = 25, so we return 25.

let arr = [53, 41, 90, 33, 84, 26, 50, 32, 63, 47, 66, 43, 29, 88, 71, 28, 83],
  k = 76;
console.log(kminsum(arr, k));
// MY WORKING SOLUTION JUST GOT TLE OTHER WISE GUN APPROACH
function kminsum(arr, k) {
  let sum = 0;
  arr = [...new Set(arr)].sort((a, b) => a - b);
  let first = arr[0];
  if (first != 1) {
    let diff = first - 1;
    let initiate = 1;
    while (diff > 0) {
      sum += initiate;
      initiate++;
      k--;
      diff--;
      if (k == 0) return sum;
    }
  }
  for (let i = 1; i < arr.length; i++) {
    let diff = arr[i] - first - 1;
    let initiate = first + 1;
    while (diff > 0) {
      sum += initiate;
      initiate++;
      k--;
      diff--;
      if (k == 0) return sum;
    }
    first = arr[i];
  }
  let final = arr[arr.length - 1] + 1;
  while (k > 0) {
    sum += final;
    final++;
    k--;
  }
  return sum;
}

function kminsum(arr, k) {
  let sum = 0;
  arr = [...new Set(arr)].sort((a, b) => a - b);
  let prev = 0;
  for (let i = 0; i < arr.length; i++) {
    if (k === 0) break;
    let gapCount = arr[i] - prev - 1;

    if (gapCount > 0) {
      let take = Math.min(k, gapCount);
      let start = prev + 1;
      let end = prev + take;
      //formula taken from somewhere
      sum += (take * (start + end)) / 2;
      k -= take;
    }
    prev = arr[i];
  }
  if (k > 0) {
    let start = prev + 1;
    let end = prev + k;
    sum += (k * (start + end)) / 2;
  }
  return sum;
}
