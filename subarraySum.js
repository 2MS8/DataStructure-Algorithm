// 560. Subarray Sum Equals K
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2
//**********************MAIN QUESTION*********************//

// let m=new Map();
// // let nums = [1, 2, 1, 2, 1], k = 3;

// let s=[1,2,3,-3,1,1,1,4,2,-3];
// k=3;

// let prefixSum=0;
// let count=0;
// m.set(0,1);

// console.log(m,k)

// for(let i=0;i<s.length;i++){

//    prefixSum+=s[i];

// 	if(m.has(prefixSum)){
// 		m.set(prefixSum,m.get(prefixSum) + 1);
// 	}else{
// 		m.set(prefixSum,1);
// 	}

//    let s_minus_k=prefixSum-k;

//    if(m.has(s_minus_k)){
//    	let cVal=m.get(s_minus_k)
//    	count=count+cVal;
//    }

// }

// console.log(count)

//****************************OTHER PATTERN*************************//

// not done

// Input: nums = [23,2,4,6,7], k = 6
// Output: true
// Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.

let arr = [23, 2, 4, 6, 7];
let k = 6,
  sum = 0;
let m = new Map();
let previous = 0;
// m.set(0,1);

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];

  m.set(sum, i);
  previous = sum;
  // let diff=sum
  for (let [key, value] of m) {
    // console.log(key)
    if (success(key, sum, k)) {
      if (sum - previous != k) {
        console.log(true);
        break;
      }
    }
  }
  // console.log(m)
}

function success(num, prefixSum, k) {
  let output = (prefixSum - num) / k;
  return Number.isInteger(output);
}
