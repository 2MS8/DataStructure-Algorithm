// Input: nums = [2,5,6,0,0,1,2], target = 0
// Output: true

//trick is to find sorted part.

// let arr=[2,5,6,0,0,1,2];
// let target=0;

let arr = [5,1,3];
let target = 3;

function getAnswer(arr,target){
	let left=0,right=arr.length-1;

	while(left<=right){
	  let mid=Math.floor((left+right)/2);
      if(arr[left]==arr[mid] && arr[mid] ==arr[right]){
      	if(arr[left]==target){
      		return true;
      	}
      	left++;
      	right--;
      }else{
      	
      	if(arr[mid]==target)return true;
      	if(arr[left]<=arr[mid]){
      		if(arr[left]<=target && arr[mid]>target){
               right=mid-1;
      		}else{
      			left=mid+1;
      		}
      	}else{
      		if(arr[mid]<target && arr[right]>=target){
      			left=mid+1;
      		}else{
      			right=mid-1;
      		}
      	}
      }
	}
	return false;
}
let ans=getAnswer(arr,target);
console.log(ans)