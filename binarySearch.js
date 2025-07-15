// // 704. Binary Search
// // Easy
// // Topics
// // Companies
// // Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// // You must write an algorithm with O(log n) runtime complexity.

 

// // Example 1:

// // Input: nums = [-1,0,3,5,9,12], target = 9
// // Output: 4
// // Explanation: 9 exists in nums and its index is 4

// let arr=[-1,0,3,5,9,12],tar=9;



// let i=0,j=arr.length-1;
// let ans=-1

// while(i<=j){
// 	let mid=(i+j)/2;

// 	if(arr[mid]>tar){
// 		j=mid-1;
// 	}else if(arr[mid]<tar){
// 		i=mid+1;
// 	}else{
// 		ans=mid; 
// 	}
// }

// console.log(ans)



// ***********************OTHER QUESTION**************************
// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

let arr=[1,3,5,6];
let tar=7;

let i=0,j=arr.length-1;
let currMid=0;

while(i<=j){
	let mid=Math.floor((i+j)/2);
	if(arr[mid]>tar){
		j=mid-1;
	}else if(arr[mid]<tar){
		i=mid+1;
	}else{
        currMid=mid;
        break;
	}
	currMid=mid;
}

console.log(currMid)

// 3a9_5KW&UFQSM%?