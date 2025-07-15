// 1283. Find the Smallest Divisor Given a Threshold
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an array of integers nums and an integer threshold, we will choose a positive integer divisor, divide all the array by it, and sum the division's result. Find the smallest divisor such that the result mentioned above is less than or equal to threshold.

// Each result of the division is rounded to the nearest integer greater than or equal to that element. (For example: 7/3 = 3 and 10/2 = 5).

// The test cases are generated so that there will be an answer.
// Example 1:
// Input: nums = [1,2,5,9], threshold = 6
// Output: 5
// Explanation: We can get a sum to 17 (1+2+5+9) if the divisor is 1. 
// If the divisor is 4 we can get a sum of 7 (1+1+2+3) and if the divisor is 5 the sum will be 5 (1+1+1+2).

let arr=[1,2,5,9], threshold = 6;

let max=arr.reduce((e,n)=>{return Math.max(e,n)},-Infinity);
let min =1;

console.log(returnDivisor(arr,threshold))

function returnDivisor(arr,threshold){
	let left=min,right=max;
	let ans;
    while(left<=right){
	let mid=Math.floor((left+right)/2);
    let res=calculateResult(arr,mid);
    if(res<=threshold){
    	ans=mid;
       right=mid-1;
    }else{
       left=mid+1;
    }
   }
   return ans;
}

function calculateResult(arr,divisor){
   let sum=0;
   for(let i=0;i<arr.length;i++){
   	let rem=Math.ceil(arr[i]/divisor);
   	sum+=rem;
   }
   return sum;
}