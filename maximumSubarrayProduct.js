// Given an integer array nums, find a subarray that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

 

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

let arr= [-3,0,1,-2];

let pmaxi=-Infinity;
let smaxi=-Infinity;

let prefix=1,suffix=1;
let i=0,j=arr.length-1;
let ans=-Infinity;

while(i<=arr.length-1){
  prefix = (prefix === 0 ? 1 : prefix) * arr[i];
        suffix = (suffix === 0 ? 1 : suffix) * arr[j];

  // prefix*=arr[i];
  // suffix*=arr[j];

  pmaxi=Math.max(prefix,pmaxi)
  smaxi=Math.max(suffix,smaxi)
 ans=Math.max(ans,Math.max(pmaxi,smaxi))
  i++;
  j--;
}


console.log(smaxi , pmaxi,ans)