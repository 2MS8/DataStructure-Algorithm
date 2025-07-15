// 410. Split Array Largest Sum
// Attempted
// Hard
// Topics
// premium lock icon
// Companies
// Given an integer array nums and an integer k, split nums into k non-empty subarrays such that the largest sum of any subarray is minimized.

// Return the minimized largest sum of the split.

// A subarray is a contiguous part of the array.

 

// Example 1:

// Input: nums = [7,2,5,10,8], k = 2
// Output: 18
// Explanation: There are four ways to split nums into two subarrays.
// The best way is to split it into [7,2,5] and [10,8], where the largest sum among the two subarrays is only 18.
// Example 2:

// Input: nums = [1,2,3,4,5], k = 2
// Output: 9
// Explanation: There are four ways to split nums into two subarrays.
// The best way is to split it into [1,2,3] and [4,5], where the largest sum among the two subarrays is only 9.

// let arr=[7,2,5,10,8], k = 2
let arr=[1,2,3,4,5], k = 2
// function calculated(arr,parts){
// 	let left=arr.reduce((r,s)=>Math.max(r,s));
// 	let right=arr.reduce((r,s)=>r+s,0);
// 	let ans;
// 	for(let i=left;i<=right;i++){
//        let a=returnSum(arr,i);
//        console.log(a,'parts',k);
//        if(a==k){
//          return i;
//        }
// 	}
// 	// return maxSum;
// }

function returnSum(arr,sumGiven){
//parts is assigned as 1 because in the end there will be one remaining part
//that need to be tracked
let parts=1;
let s=0

for(let i=0;i<arr.length;i++){
   if(arr[i]+s <= sumGiven){
      s+=arr[i];
   }else{
      parts++;
      s=arr[i];
   }
}
return parts;
}

function calculatedBinary(arr,parts){
   let left=arr.reduce((r,s)=>Math.max(r,s));
   let right=arr.reduce((r,s)=>r+s,0);
   console.log(left,right,'points')
   while(left<=right){
      let mid=Math.floor((left+right)/2);
       console.log(mid,'mid',returnSum(arr,mid))
      if(returnSum(arr,mid) <= parts){
          right=mid-1;
      }else{
          left=mid+1;
      }
   }
  return left;
}
console.log(calculatedBinary(arr,k));