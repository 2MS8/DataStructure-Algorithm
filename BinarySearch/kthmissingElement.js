// 1539. Kth Missing Positive Number
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

// Return the kth positive integer that is missing from this array.

 

// Example 1:

// Input: arr = [2,3,4,7,11], k = 5
// Output: 9
// Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.

// let arr=[2,3,4,7,11],k=5;
// let arr=[1,2,3,4], k = 2
let arr=[2,3,4],k=1;
// let missing=[];
// for(let i=1;i<=arr[arr.length-1];i++){
// if(!arr.includes(i)){
// 	missing.push(i)
// }
// }
// console.log(missing,missing[k-1])

let ans=kthmissing(arr,k);

console.log(ans)

function kthmissing(arr,k){
let left=0,right=arr.length-1,mid,missingNum;

while(left<=right){
	mid=Math.floor((left+right)/2);
	missingNum=arr[mid]-(mid+1);
	console.log({missingNum,mid})
	if(missingNum >= k){
		right=mid-1;
	}else{
		left=mid+1;
	}
}

// if(!missingNum){
// 	return arr[right]+k;
// }
// return arr[right]+(k-right);
return {mid,left,right,missingNum};

}

// function kthmissing(arr, k) {
//     let left = 0, right = arr.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         let missing = arr[mid] - (mid + 1); // # of missing numbers before this point

//         if (missing < k) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }

//     // The kth missing number is left + k
//     return left + k;
// }
