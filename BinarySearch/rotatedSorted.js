// Input : nums = [4, 5, 6, 7, 0, 1, 2], k = 0

// Output: 4


// let arr=[4, 5, 6, 7, 0, 1, 2];
// let target=0;
let arr = [1, 1, 1, 1, 1, 1, 3, 1, 1, 1];
let target = 3;

function getAnswer(arr,target){

let left=0,right=arr.length-1;


while(left<=right){
	let mid=Math.floor((left+right)/2);
    if(arr[mid]==target)return mid;

	if(arr[left]<=arr[mid]){
		if(arr[left]<=target && arr[mid]>target){
           right=mid-1;
		}else{
           left=mid+1;
		}
	}else{
      if(arr[mid]<=target && arr[right]>target){
        left=mid+1;
      }else{
        right=mid-1;
      }
	}
}

}

let ans=getAnswer(arr,target);
console.log(ans)