// 992. Subarrays with K Different Integers
// Hard
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer array nums and an integer k, return the number of good subarrays of nums.

// A good array is an array where the number of different integers in that array is exactly k.

// For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.
// A subarray is a contiguous part of an array.

// Example 1:

// Input: nums = [1,2,1,2,3], k = 2
// Output: 7
// Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]
// Example 2:

// Input: nums = [1,2,1,3,4], k = 3
// Output: 3
// Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].

function optimal(arr, k) {
  let j = arr.length - 1;
  let mp = new Map(),
    count = 0,
    check = false;
  for (let i = arr.length - 1; i >= 0; i--) {
    mp.set(arr[i], (mp.get(arr[i]) || 0) + 1);

    if (mp.size == k) count++;

    if (mp.size > k) {
      mp.set(arr[j], mp.get(arr[j]) - 1);
      if (!mp.get(arr[j])) {
        mp.delete(arr[j]);
      }
      j--;
      if (mp.size == k) {
        count++;
      }
      check = true;
    }
    console.log("map:", mp, "count", count, "i", i, "j", j);
  }

  while (j >= 0) {
    if (mp.size == k) {
      count++;
    }
    mp.set(arr[j], mp.get(arr[j]) - 1);
    if (!mp.get(arr[j])) mp.delete(arr[j]);
    j--;
    console.log("map:", mp, "count", count, "second loop");
  }
  return count;
}
console.log(optimal([1, 2, 1, 2, 3], 2));
console.log(optimal([1, 2, 1, 3, 4], 3));
