// 2598. Smallest Missing Non-negative Integer After Operations
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You are given a 0-indexed integer array nums and an integer value.

// In one operation, you can add or subtract value from any element of nums.

// For example, if nums = [1,2,3] and value = 2, you can choose to subtract value from nums[0] to make nums = [-1,2,3].
// The MEX (minimum excluded) of an array is the smallest missing non-negative integer in it.

// For example, the MEX of [-1,2,3] is 0 while the MEX of [1,0,3] is 2.
// Return the maximum MEX of nums after applying the mentioned operation any number of times.

// Example 1:

// Input: nums = [1,-10,7,13,6,8], value = 5
// Output: 4
// Explanation: One can achieve this result by applying the following operations:
// - Add value to nums[1] twice to make nums = [1,0,7,13,6,8]
// - Subtract value from nums[2] once to make nums = [1,0,2,13,6,8]
// - Subtract value from nums[3] twice to make nums = [1,0,2,3,6,8]
// The MEX of nums is 4. It can be shown that 4 is the maximum MEX we can achieve.
// Example 2:

// Input: nums = [1,-10,7,13,6,8], value = 7
// Output: 2
// Explanation: One can achieve this result by applying the following operation:
// - subtract value from nums[2] once to make nums = [1,-10,0,13,6,8]
// The MEX of nums is 2. It can be shown that 2 is the maximum MEX we can achieve.

function mex(arr, value) {
  let filterArray = arr.map((element) => {
    let isNegative = element < 0 ? true : false;
    element = Math.abs(element);
    if (element < value) {
      return element;
    } else {
      //   console.log(element, value, "elementvalue");
      let e = element % value;
      return isNegative ? -1 * e : e;
    }
  });

  let hash = Array(arr.length).fill(false);
  filterArray.forEach((element) => {
    // console.log(element, hash[element], "test");
    if (hash[element] || hash[element] == 0) {
      hash[element] = true;
    }
  });
  for (let i = 0; i < hash.length; i++) {
    if (!hash[i]) {
      return i;
    }
  }

  //   return hash;
}
console.log(mex([3, 0, 3, 2, 4, 2, 1, 1, 0, 4], 5));
// console.log(mex([1, -10, 7, 13, 6, 8], 7));
