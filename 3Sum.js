// 15. 3Sum
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// let arr=[-1,0,1,2,-1,-4];
// let ans=[]

// for(let i=0;i<arr.length;i++){
// 	let sum=arr[i];
// 	for(let j=i+1;j<arr.length;j++){
// 		sum+=arr[j];
// 		for(let k=j+1;k<arr.length;k++){
// 			if(sum+arr[k]==0){
//               ans.push([arr[i],arr[j],arr[k]]);
// 			}
// 		}
// 		sum=arr[i]
// 	}
// }

// console.log(ans)

// let arr = [-1, 0, 1, 2, -1, -4];
// let ans = [];
// let unique = new Set();

// for (let i = 0; i < arr.length; i++) {
// 	for (let j = i + 1; j < arr.length; j++) {
// 		for (let k = j + 1; k < arr.length; k++) {
// 			if (arr[i] + arr[j] + arr[k] === 0) {
// 				let triplet = [arr[i], arr[j], arr[k]].sort((a, b) => a - b); // normalize
// 				let key = triplet.join(','); // convert to string for Set
// 				if (!unique.has(key)) {
// 					unique.add(key);
// 					ans.push(triplet);
// 				}
// 			}
// 		}
// 	}
// }

// console.log(ans);

//*******************TLE**************************//

// let arr = [-1, 0, 1, 2, -1, -4];
// let ans = [];
// arr=arr.sort((a,b)=>a-b)

// for(let i=0;i<arr.length-2;i++){
// 	let a=i+1,b=arr.length-1;
// 	while(a<b){
// 		let sum=arr[i] + arr[a] + arr[b];
// 		console.log(sum)
// 		if(sum == 0){
// 			ans.push([arr[i],arr[a],arr[b]]);
// 			a++;
// 			b--;
// 		}else if(sum < 0){
//             a++;
// 		}else{
//             b--;;
// 		}
// 	}
// }

// let s=new Set(),finalAns=[];

// for(let i of ans){
// 	let str=i.sort((a,b)=>a-b).join("");
// 	if(!s.has(str)){
//         finalAns.push(i);
//         s.add(str)
// 	}
// }

// console.log(finalAns);

// let arr=[-1, 0, 1, 2, -1, -4];
// let ans=[];
// arr=arr.sort((a,b)=>(a-b))
// for(let i=0;i<arr.length;i++){

// 	if(arr[i]==arr[i-1] && i>0)continue;
// 	let j=i+1,k=arr.length-1;

// 	while(j<k){
// 		let sum=arr[i]+arr[j]+arr[k];
// 		console.log(sum,'this is sum')
// 		if(sum === 0){
//            ans.push([arr[i],arr[j],arr[k]]);
//            while(j<k && arr[j]==arr[j+1])j++;
//            while(k>j && arr[k] == arr[k-1])k--;
//            j++;
//            k--;
// 		}else if(sum > 0){
//              k--;
// 		}else{
// 			j++;
// 		}
// 	}
// }
// console.log(ans)

// 16. 3Sum Closest
// Medium
// Topics
// premium lock icon
// Companies
// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
let arr = [-1, 2, 1, -4],
  target = 1;

function closestSum(arr, target) {
  arr = arr.sort((a, b) => a - b);
  let glb_close = { diff: Infinity, sum: 0 };
  for (let i = 0; i < arr.length - 2; i++) {
    let j = i + 1,
      k = arr.length - 1,
      sum = 0;
    while (j < k) {
      sum = arr[i] + arr[j] + arr[k];
      // close = Math.min(close, Math.abs(sum - target));
      if (glb_close.diff > Math.abs(sum - target)) {
        glb_close.sum = sum;
        glb_close.diff = Math.abs(sum - target);
      }
      if (sum == target) {
        return sum;
      } else if (sum > target) {
        k--;
      } else {
        j++;
      }
    }
    //   glb_close = Math.min(glb_close, close.sum);
  }
  return glb_close.sum;
}

console.log(glb_close, "answer");
