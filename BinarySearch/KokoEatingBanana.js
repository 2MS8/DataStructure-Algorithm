// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.

 

// Example 1:

// Input: piles = [3,6,7,11], h = 8
// Output: 4
// let arr=[3,6,7,11]
// let arr=[30,11,23,4,20]
// let h=5;

///****************BRUTE *******************//
// let maxMin=findMAxAndMin(arr);
// console.log(maxMin,'maxmin')
// let ans=Infinity;

// for(let i=maxMin.min;i<=maxMin.max;i++){
// 	let totalT=0;
	
//   for(let j=0;j<arr.length;j++){
//   	let timeTaken=calculateTime(arr[j],i,0);
//     totalT+=timeTaken;
//   }
//   if(totalT>h) continue;
//   ans=Math.min(i,ans);
// }

// console.log(ans,'Answer')

//*****************BRUTE********************//

let arr=[30,11,23,4,20]
let h=5;
console.log(binarySearchSolution(arr,h))

function binarySearchSolution(arr,h){
   let minmax=findMAxAndMin(arr);
    
   // doing wrong here minimum speed will be 1 
   let left=minmax.min,right=minmax.max,mid;
   while(left<=right){
       mid=Math.floor((left+right)/2);
      let count=arrayAnswer(arr,mid);
      if(count<=h){
         right=mid-1
      }else{
         left=mid+1
      }
   }
   return left;
}

function arrayAnswer(arr,t){
  let totalTime=0;
  for(let i=0;i<arr.length;i++){
   totalTime+=calculateTime(arr[i],t,0)
  }
  return totalTime;
}

function calculateTime(bananas,time,totalHours){
   // console.log("times")
   //over engineered
   if(bananas-time>0){
   	 bananas=bananas-time;
      totalHours++;
      return calculateTime(bananas,time,totalHours);
   }else{
   	  totalHours++
      return totalHours;
   }
}

function findMAxAndMin(arr){

	let max=-Infinity,min=Infinity;
	for(let i=0;i<arr.length;i++){
		max=Math.max(max,arr[i]);
		min=Math.min(min,arr[i]);
	}
	return {max,min}
}


