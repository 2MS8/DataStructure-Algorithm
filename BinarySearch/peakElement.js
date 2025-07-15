// A peak element is an element that is strictly greater than its neighbors.

// Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

// You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

// You must write an algorithm that runs in O(log n) time.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.

// let arr=[1,2,3,1];
let arr=[1,2,1,3,5,6,4];

function returnPeak(arr){
	let n=arr.length
if(arr.length==1)return arr[0];
if(arr[0]>arr[1])return arr[0];
if(arr[n-1] > arr[n-2]) return arr[n-1];
let left=1,right=n-2;

while(left<=right){
	let mid=Math.floor((left+right)/2);
	if(arr[mid]>arr[mid-1] && arr[mid] >arr[mid+1]){
		return arr[mid];
	}else if(arr[mid] > arr[mid-1] ){
		left=mid+1;
	}else if(arr[mid]<arr[mid-1]){
		right=mid-1;
	}else{
		left=mid+1;
	}
}
}

console.log(returnPeak(arr));