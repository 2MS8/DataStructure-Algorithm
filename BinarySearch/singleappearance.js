// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

// Return the single element that appears only once.

// Your solution must run in O(log n) time and O(1) space.

 

// Example 1:

// Input: nums = [1,1,2,3,3,4,4,8,8]
// Output: 2
// Example 2:

// Input: nums = [3,3,7,7,10,11,11]
// Output: 10


// let nums=[1];
let nums = [3,7,7]
let left=0,right=nums.length-1;

function returnans(){

while(left<=right){
	let mid=Math.floor((left+right)/2);

	if (nums[mid] == nums[mid + 1]) {
  if (mid % 2 == 0) {
    left = mid + 2;
  } else {
    right = mid - 1;
  }
} else if (nums[mid] == nums[mid - 1]) {
  if ((mid - 1) % 2 == 0) {
    left = mid + 1;
  } else {
    right = mid - 2;
  }
} else {
  return nums[mid];
}
}
// return false;
}

// function returnans() {
//   while (left < right) {
//     let mid = Math.floor((left + right) / 2);

//     // Ensure mid is even (so its pair is mid + 1)
//     if (mid % 2 === 1) mid--;

//     if (nums[mid] === nums[mid + 1]) {
//       left = mid + 2;
//     } else {
//       right = mid;
//     }
//   }

//   return nums[left];
// }

let ans=returnans();

console.log(ans)