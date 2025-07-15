let arr=[3, 4, 4 ,5,5,5,5,7, 8, 10];
let x=5;
// lower bound (where element >= target)
// upper bound (where element > target)


function lowerBound(arr,target){


let left=0,right=arr.length-1;
let lowerBound=-1;

while(left<=right){
let mid=Math.floor((left+right)/2);

if(arr[mid] > target){
  lowerBound=mid;
  right=mid-1;
}else{
  left=mid+1;
}

}

return lowerBound;

}

let ans=lowerBound(arr,x);
console.log(ans)
