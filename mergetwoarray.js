// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// nums1 = [1], m = 1, nums2 = [], n = 0
let arr= [1,2,3,0,0,0];
let brr=[2,5,6];
let a=3,b=3;

let i=a-1,j=b-1
let last =a+b-1;

while(i>=0 && j>=0){
	if(arr[i] > brr[j]){
	   arr[last]=arr[i];
       last--;
       i--
	}else{
		arr[last]=brr[j];
		j--;
		last--;
	}
}

// function swapArr(arr,brr,a,b){
// 	let temp=arr[a];
// 	arr[a]=brr[b];
// 	brr[b]=temp;
// }
// function swap(arr,i,j){
// 	let temp=arr[i];
// 	arr[i]=arr[j];
// 	arr[j]=temp;
// }
console.log(arr,brr)