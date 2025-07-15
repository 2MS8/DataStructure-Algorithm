// nums =[3, 4, 4, 7, 8, 10], x= 5

let arr=[3, 4, 4 ,5,7, 8, 10];
let x=3;

// floor ,element <x 


let left=0,right=arr.length-1;
let floor=-1,ceil=-1;

while(left<=right){
	let mid=Math.floor((left+right)/2);
	if(arr[mid]>x){
		ceil=arr[mid];
       right=mid-1;
	}else if(arr[mid] == x){
        floor=ceil=arr[mid];
        break;
	}else{
       left=mid+1;
       floor=arr[mid];
	}
}
console.log(floor,ceil,'this is floor and ceil of the array')