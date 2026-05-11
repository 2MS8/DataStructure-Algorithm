// 3507. Minimum Pair Removal to Sort Array I
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an array nums, you can perform the following operation any number of times:

// Select the adjacent pair with the minimum sum in nums. If multiple such pairs exist, choose the leftmost one.
// Replace the pair with their sum.
// Return the minimum number of operations needed to make the array non-decreasing.

// An array is said to be non-decreasing if each element is greater than or equal to its previous element (if it exists).

// Example 1:

// Input: nums = [5,2,3,1]

// Output: 2

// Explanation:

// The pair (3,1) has the minimum sum of 4. After replacement, nums = [5,2,4].
// The pair (2,4) has the minimum sum of 6. After replacement, nums = [5,6].
// The array nums became non-decreasing in two operations.

function minimumSum(arr, isSorted, steps) {
  if (isSorted) return steps - 1;
  let currStatus = true,
    index1,
    index2,
    minSum = Infinity;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + arr[i + 1] < minSum) {
      minSum = arr[i] + arr[i + 1];
      ((index1 = i), (index2 = i + 1));
    }
    if (arr[i] > arr[i + 1]) {
      currStatus = false;
    }
  }
  if (!currStatus) {
    let nArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (i == index1) {
        nArr.push(minSum);
      } else if (i != index2) {
        nArr.push(arr[i]);
      }
    }
    return minimumSum(nArr, currStatus, steps + 1);
  } else {
    return minimumSum(arr, currStatus, steps + 1);
  }
}

console.log(minimumSum([5, 2, 3, 1], false, 0));
