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

//OPTIMAL TRY
// const arr = [38, 27, 43, 10];

let arr = [1, 3, 2, 3, 1];
mergeSort(arr, 0, arr.length - 1);

console.log(arr);

function mergeSort(arr, left, right) {
  if (left >= right) return;
  let mid = Math.floor((left + right) / 2);
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  merge(arr, left, mid, right);
}

function merge(arr, left, mid, right) {
  let arr1 = [],
    arr2 = [],
    sorted = [],
    k = left;

  for (let i = left; i <= mid; i++) {
    arr1.push(arr[i]);
  }
  for (let i = mid + 1; i <= right; i++) {
    arr2.push(arr[i]);
  }

  console.log("this is sorted arrays", arr1, arr2);

  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      sorted.push(arr1[i]);
      i++;
    } else {
      sorted.push(arr2[j]);
      j++;
    }
  }

  if (i == arr1.length) {
    while (j < arr2.length) {
      sorted.push(arr2[j]);
      j++;
    }
  } else {
    while (i < arr1.length) {
      sorted.push(arr1[i]);
      i++;
    }
  }

  for (let i = 0; i < sorted.length; i++) {
    arr[k] = sorted[i];
    k++;
  }
  console.log(arr, "inside");
}
