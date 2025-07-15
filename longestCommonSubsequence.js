// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.
// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

//SOLUTION


// let arr=[0,3,7,2,5,8,4,6,0,1];

//************BRUTE FORCE************* //
// let longest=1,maxi=-99999;

// for(let i=0;i<arr.length;i++){
//   findSub(arr[i]+1,arr);
// }

// function findSub(plusOne,arr){
// 	for(let i=0;i<arr.length;i++){
// 		if(arr[i]==plusOne){
// 			longest++;
// 			findSub(arr[i]+1,arr);
// 		}
// 	}
// 	maxi=Math.max(maxi,longest);
// 	longest=1;
// 	return;
// }
// console.log(maxi)

//*************OPTIMIZED SOLUTION**************//
let arr=[100,4,200,1,3,2];
// let arr=[0]
let s=new Set([...arr]);
console.log(s)
if(arr.length==0){
	console.log(0);
	return;
}
let longest=1,maxi=-99999;

for(let i=0;i<arr.length;i++){
	if(!s.has(arr[i]-1)){
		let val=arr[i]-1;
		while(s.has(val)){
			val--;
			longest++;
		}
		maxi=Math.max(longest,maxi);
		longest=1;
	}
}

console.log(maxi)

// **************TLE**************//
/**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var longestConsecutive = function(nums) {

//     if(nums.length<=0){
//         return 0;
//     }
//     let m=new Map();
//     for(let i=0;i<nums.length;i++){
//         m.set(nums[i],i);
//     }
//     let maximum=Number.MIN_SAFE_INTEGER;

//     for(let i=0;i<nums.length;i++){
//         let ls=check(nums[i],'sub',0);
//         let la=check(nums[i],'add',0);
//         let greater;
//         if(ls>la){
//             greater=ls;
//         }else{
//             greater=la;
//         }
//         maximum=Math.max(maximum,greater);
//     }
//     return maximum;
//     function check(n,type,len){
//         if(type==="sub"){
//             if(m.has(n)){
//                 return check(n-1,'sub',len+1);
//             }else{
//                 return len;
//             }
//         }else{
//             if(m.has(n)){
//                 return check(n+1,'add',len+1);
//             }else{
//                 return len;
//             }
//         }
//     }
// };


// *********FINAL CORRECT CODE WAS ITERATING ARRAY INSTEAD OF SET*********//
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    
    let longest=0;
    let s=new Set([...nums]);
    
    for(let nums of s){
        if(!s.has(nums-1)){
            let val=nums+1,len=1;
            while(s.has(val)){
                val++;
                len++;
            }
            longest=Math.max(longest,len);
            
        }
    }
   
    return longest;
};