// 1248. Count Number of Nice Subarrays
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.
// Return the number of nice sub-arrays.
// Example 1:
// Input: nums = [1,1,2,1,1], k = 3
// Output: 2
// Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].
// Example 2:
// Input: nums = [2,4,6], k = 1
// Output: 0
// Explanation: There are no odd numbers in the array.
// Example 3:

// Input: nums = [2,2,2,1,2,2,1,2,2,2], k = 2
// Output: 16

//IN SUBARRAY SUM QUESTION USE HASHMAP AND PREFIX SUM
//WHAT SHOULD BE REMOVED TO GET THE SUM
//IF DESIRED SUM IS K ,PREFIX SUM IS P THEN REMOVED VALUE IS P-K
//FIND THIS P-K IN HASHMAP GET ITS COUNT AND CUMMILATE TO GET ANSWER
function niceSubarray(arr, k) {
  let convertArray = arr.map((elem) => {
    return elem % 2 == 0 ? 0 : 1;
  });
  let m = new Map();
  m.set(0, 1);
  let preFixSum = 0,
    count = 0;
  for (let i = 0; i < arr.length; i++) {
    preFixSum += convertArray[i];
    if (m.has(preFixSum)) {
      m.set(preFixSum, m.get(preFixSum) + 1);
    } else {
      m.set(preFixSum, 1);
    }

    if (m.has(preFixSum - k)) {
      count += m.get(preFixSum - k);
    }
  }
  return count;
  console.log(count, "converted array");
}

niceSubarray([1, 1, 2, 1, 1], 3);

// similar question
// 2261. K Divisible Elements Subarrays
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer array nums and two integers k and p, return the number of distinct subarrays, which have at most k elements that are divisible by p.

// Two arrays nums1 and nums2 are said to be distinct if:

// They are of different lengths, or
// There exists at least one index i where nums1[i] != nums2[i].
// A subarray is defined as a non-empty contiguous sequence of elements in an array.

// Example 1:

// Input: nums = [2,3,3,2,2], k = 2, p = 2
// Output: 11
// Explanation:
// The elements at indices 0, 3, and 4 are divisible by p = 2.
// The 11 distinct subarrays which have at most k = 2 elements divisible by 2 are:
// [2], [2,3], [2,3,3], [2,3,3,2], [3], [3,3], [3,3,2], [3,3,2,2], [3,2], [3,2,2], and [2,2].
// Note that the subarrays [2] and [3] occur more than once in nums, but they should each be counted only once.
// The subarray [2,3,3,2,2] should not be counted because it has 3 elements that are divisible by 2.
// Example 2:

// Input: nums = [1,2,3,4], k = 4, p = 1
// Output: 10
// Explanation:
// All element of nums are divisible by p = 1.
// Also, every subarray of nums will have at most 4 elements that are divisible by 1.
// Since all subarrays are distinct, the total number of subarrays satisfying all the constraints is 10.

function kdivisibility(arr, k, p) {
  //   let count = 0;
  let s = new Set();
  for (let i = 0; i < arr.length; i++) {
    let dCount = 0,
      currArr = [];
    for (let j = i; j < arr.length; j++) {
      currArr.push(arr[j]);
      if (arr[j] % p === 0) {
        dCount++;
      }
      if (dCount <= k) {
        s.add(currArr.toString());
      }
    }
  }
  console.log(s.size, "this is size");
  return s.size;
}
console.log(kdivisibility([2, 3, 3, 2, 2], 2, 2));
