// Input: nums = [3,4,5,1,2]
// Output: 1

// let arr=[3,4,5,1,2];
// let arr=[3,1,2]
let arr=[2, 2, 2, 2, 0, 1, 2, 2, 2]

// brute force

// let min=Infinity;

// for(let i=0;i<arr.length;i++){
// 	if(min>arr[i]){
// 		min=arr[i];
// 	}
// }
// console.log(min);

// optimal
// let a;
// console.log(a);

let left=0,right=arr.length-1;
let min=Infinity;

while(left<=right){
	let mid=Math.floor((left+right)/2);

	if(arr[left]<=arr[mid]){
      min=min>arr[left] ? arr[left] : min;
      left=mid+1;
	}else{
      min=min > arr[mid] ? arr[mid] : min ;
      right=mid-1;
	}
	console.log(min,'inside loop')
}
console.log(min)