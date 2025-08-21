// 907. Sum of Subarray Minimums
// Medium
// Topics
// premium lock icon
// Companies
// Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr. Since the answer may be large, return the answer modulo 109 + 7.

 

// Example 1:

// Input: arr = [3,1,2,4]
// Output: 17
// Explanation: 
// Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. 
// Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
// Sum is 17.
// Example 2:

// Input: arr = [11,81,94,43,3]
// Output: 444

function sumSubMin(arr){
  let nextSmallest=new Array(arr.length);
  let previousSmallest=new Array(arr.length);
  nextSmallest[nextSmallest.length-1]=arr[arr.length-1];
  previousSmallest[0]=arr[0]

  let i=1,j=arr.length-2;
  while(i<arr.length && j>=0){
    if(nextSmallest[j+1]<=arr[j]){

    }
  }
}