// You are given an integer array bloomDay, an integer m and an integer k.

// You want to make m bouquets. To make a bouquet, you need to use k adjacent flowers from the garden.

// The garden consists of n flowers, the ith flower will bloom in the bloomDay[i] and then can be used in exactly one bouquet.

// Return the minimum number of days you need to wait to be able to make m bouquets from the garden. If it is impossible to make m bouquets return -1.

 

// Example 1:

// Input: bloomDay = [1,10,3,10,2], m = 3, k = 1
// Output: 3


// let arr=[1,10,3,10,2];
// let m=3,k=1;

// let arr=[1,10,3,10,2], m = 3, k = 2;
let arr=[7,7,7,7,12,7,7], m = 2, k = 3
let left=1,right=findMAxAndMin(arr);

console.log(mainfunction())
// getNumberOfBouquet(m,k,arr,1)
function mainfunction(){
	let res=0;
	while(left<=right){
	let mid=Math.floor((left+right)/2);
	let num=getNumberOfBouquet(m,k,arr,mid);
	if(num >= m){
		res=mid;
		right=mid-1;
	}else{
		left=mid+1;
	}
   }
   // console.log(mid,'mid')
  
   return res;
}



function getNumberOfBouquet(m,k,arr,bloomFlower){
   let numPair=0,check=0;
   for(let i=0;i<arr.length;i++){
   	if(arr[i] <= bloomFlower){
       check++;
       if(check == k){
       	numPair++;
       	check=0;
       }
   	}else{
   		check=0;
   	}
   }
   console.log(numPair,'this is numpair')
   return numPair;
}


function findMAxAndMin(arr){
	let max=-Infinity,min=Infinity;
	for(let i=0;i<arr.length;i++){
		max=Math.max(max,arr[i]);
	}
	return max;
}