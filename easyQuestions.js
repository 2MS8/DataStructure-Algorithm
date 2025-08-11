// Longest Common Prefix
// Easy
// Topics
// premium lock icon
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// let strs = ["flower","flow","flight"];
// let strs=["dog","racecar","car"];
// console.log(abc(strs))
// function abc(strs){
// let ans=[...strs[0]];
// for(let i=1;i<strs.length;i++){
//    let currString=strs[i];
//     let temp=[]
//    for(let j=0;j<ans.length;j++){
//      if(currString[j]==ans[j]){
//         temp.push(currString[j])
//      }else{
//         break;
//      }
//    }
//    ans=temp;
// }
// let ansString=''
// if(ans.length>0){
//   for(let i=0;i<ans.length;i++){
//     ansString+=ans[i];
//   }
// }

// return ansString;
// }
// let ans=strs[0];

// for(let i=1;i<strs.length;i++){
// 	let currStr=strs[i];
//     let itr=0;
//     console.log(currStr[itr],ans[itr])
// 	while(currStr[itr]==ans[itr]){
//       itr++;
// 	}
// 	if(!itr){
// 		ans=[];
// 	}else{
// 		ans=ans.slice(0,itr);
// 	}
// }

// console.log(ans)

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].
//  let num=[9,9];
//  // let num=[9,9];

// function result(num){
// //9 condition
// if(num.length==1 && num[0]==9){
//   return [1,0];
// }

// //1-9 condition
// if(num[num.length-1]!=9){
//   num[num.length-1]+=1;
//   return num;
// }

// let remaining=1,ans=[];
// ans.push(0);
// for(let i=num.length-2;i>=0;i--){
//   if(remaining){
//     let sum=num[i]+1;
//     if(sum>9){
//       ans.push(0);
//     }else{
//        ans.push(sum);
//        remaining=0;
//     }
//   }else{
//     ans.push(num[i]);
//   }
// }

// if(remaining)ans.push(remaining);
// ans=ans.reverse()
// return ans;
// }
// console.log(result(num))

// let a='1',b='4';

// function myfunc(a){
//   let aPow=Math.pow(10,a.length-1)
//   let ansa=0
//   for(let i=0;i<a.length;i++){
//   ansa=a[i]*aPow +ansa;
//   aPow/=10;
// }
//   return ansa;

// }

// let ans=myfunc(a);
// ans=ans.toString*
// console.log( ans)

// Example 1:
// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return.
// Example 2:
//TOTALLY DUMB GOT NO BRAIN TRY SOMETHING ELSE MOTI BUDDHI
// let x = 8;
// console.log(444);
// console.log(getanswer(x));
// function getanswer(x) {
//   let left = 1,
//     right = x,
//     mid = x / 2;
//   while (left < mid) {
//     // let mid=Math.floor((right)/2);
//     if (Math.round(mid * mid) == x) {
//       return mid;
//     } else if (mid * mid > x) {
//       mid = mid / 2;
//       right = mid;
//     } else {
//       mid = Math.floor((mid + right) / 2);
//       right = mid;
//     }
//   }
// }

// var mySqrt = function (x) {
//   function giveanswer(x) {
//     if (x < 2) return x;

//     let left = 1,
//       right = x,
//       ans = 0;

//     while (left <= right) {
//       let mid = Math.floor((left + right) / 2);
//       if (mid * mid <= x) {
//         ans = mid; // store valid candidate
//         left = mid + 1; // try to find bigger sqrt
//       } else {
//         right = mid - 1; // go smaller
//       }
//     }

//     return ans;
//   }
// };

// let arr = [1, 2, -1, -2, 1, 0, -1];
// let arr = [1, 1, 0, 1, 1];
// let arr = [1, 2, 3, 4, 5];
// let arr = [-20, 20];
// let m = new Map();
// let curr_sum = 0,
//   max_sum = -Infinity;
// let i = 0,
//   j = 0;
// while (j < arr.length) {
//   if (m.has(arr[j])) {
//     while (m.has(arr[j])) {
//       curr_sum -= arr[i];
//       m.delete(arr[i]);
//       i++;
//     }
//   }
//   m.set(arr[j], 1);
//   curr_sum += arr[j];
//   max_sum = Math.max(max_sum, curr_sum);
//   j++;
// }
// CORRECT SOLUTION BY CHAT GPT AS IM DUMB)

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxSum = function (arr) {
//   let m = new Map();
//   let curr_sum = 0,
//     max_sum = 0;
//   let i = 0,
//     j = 0;

//   while (j < arr.length) {
//     if (m.has(arr[j])) {
//       while (m.has(arr[j])) {
//         curr_sum -= arr[i];
//         m.delete(arr[i]);
//         i++;
//       }
//     }
//     m.set(arr[j], 1);
//     curr_sum += arr[j];
//     max_sum = Math.max(max_sum, curr_sum);
//     j++;
//   }

//   return max_sum;
// };

// // while (i <= j && j < arr.length) {
// //   console.log(m.get(arr[j]), j, "inside");
// //   if (m.get(arr[j])) {
// //     i++;
// //     curr_sum = 0;
// //     m.clear();
// //   } else {
// //     m.set(arr[j], 1);
// //     if (curr_sum < arr[j]) {
// //       curr_sum = 0;
// //     }
// //     curr_sum += arr[j];
// //     console.log(curr_sum, "curr_sum");
// //     max_sum = Math.max(max_sum, curr_sum);
// //     j++;
// //   }
// // }
// console.log(max_sum);

// 219. Contains Duplicate II
// Easy
// Topics
// premium lock icon
// Companies
// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

// ******solved in one shot by me******//

// let arr = [1, 2, 3, 1],
//   k = 3;
// console.log(giveAnswer(arr, k));
// function giveAnswer(arr, k) {
//   let i = 0,
//     j = 0,
//     len = arr.length - 1;
//   let m = new Set();
//   while (j <= len) {
//     if (Math.abs(j - i) <= k) {
//       if (m.has(arr[j])) {
//         return true;
//       } else {
//         m.add(arr[j]);
//       }
//       j++;
//     } else {
//       m.delete(arr[i]);
//       i++;
//     }
//   }
//   return false;
// }
//888888888888888888888888888888888888888888888888888888888888888888888888//

// 3487. Maximum Unique Subarray Sum After Deletion
// Attempted
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given an integer array nums.

// You are allowed to delete any number of elements from nums without making it empty. After performing the deletions, select a subarray of nums such that:

// All elements in the subarray are unique.
// The sum of the elements in the subarray is maximized.
// Return the maximum sum of such a subarray.

// Example 1:

// Input: nums = [1,2,3,4,5]

// Output: 15

// Explanation:

// Select the entire array without deleting any element to obtain the maximum sum.

// Example 2:

// Input: nums = [1,1,0,1,1]

// Output: 1

// Explanation:

// Delete the element nums[0] == 1, nums[1] == 1, nums[2] == 0, and nums[3] == 1. Select the entire array [1] to obtain the maximum sum.

// Example 3:

// Input: nums = [1,2,-1,-2,1,0,-1]

// Output: 3

// Explanation:

// Delete the elements nums[2] == -1 and nums[3] == -2, and select the subarray [2, 1] from [1, 2, 1, 0, -1] to obtain the maximum sum.

let arr = [2, -10, 6];
console.log(maxSubarray(arr));
function maxSubarray(arr) {
  let sum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let s = new Set(),
      localSum = 0;
    for (let j = i; j < arr.length; j++) {
      console.log(arr[j], "this is arr[j]");
      if (s.has(arr[j])) {
        break;
      } else {
        if(localSum+arr[j] < localSum){
          
        }
        localSum += arr[j];
        s.add(arr[j]);
      }
      sum = Math.max(sum, localSum);
    }
  }
  return sum;
}
