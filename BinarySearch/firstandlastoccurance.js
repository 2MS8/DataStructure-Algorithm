// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]


// let nums=[5,7,7,8,8,10],target=8;

let nums=[1],target=1;

 // lower bound 

let left=0,right=nums.length-1;

let lowBound=[];
let uppBound=[];

while(left<=right){
let mid=Math.round((left+right)/2);

if(nums[mid]>=target){
   lowBound[0]=nums[mid];
   lowBound[1]=mid;
   right=mid-1;
   
}else{
   left=mid+1;
}

}
left=0,right=nums.length-1;

while(left<=right){
    let mid=Math.floor((left+right)/2);

    if(nums[mid]>target){
        uppBound[0]=nums[mid-1];
        uppBound[1]=mid-1;
        right=mid-1
    }else{
        left=mid+1;
    }
}


console.log(lowBound,uppBound)


// // let arr=[5,7,7,8,8,10];
// let arr=[1,1,1,1]
// let i=0,j=arr.length-1;
// let target=1;
// let ans=-1;
// let occ=[-1,-1];
// while(i<=j){
// 	let mid=Math.floor((i+j)/2);
//     if(arr[mid]>target){
//     	j=mid-1;
//     }else if(arr[mid]<target){
//     	i=mid+1;
//     }else{
//       ans=mid;
//       break;
//     }
// } 
// // ans=0
// console.log(ans,'ans')
// if(arr[ans+1]!=target){
//         if(arr[ans-1]==target){
//           occ=[ans-1,ans];
//         }else{
//             occ=[ans,ans]
//         }   
//     }else{
//         if(arr[ans+1]==target){
//             occ=[ans,ans+1]
//         }else{
//             occ=[ans,ans]
//         }
     
//     }


// console.log(ans,occ)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    
   let ans = [-1, -1];

    let left = 0, right = nums.length - 1;

  
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] >= target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }


    if (left >= nums.length || nums[left] !== target) return ans;
    ans[0] = left;


    right = nums.length - 1;
    let start = left; 

    while (start <= right) {
        let mid = Math.floor((start + right) / 2);
        if (nums[mid] <= target) {
            start = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    ans[1] = right;
    return ans;

};