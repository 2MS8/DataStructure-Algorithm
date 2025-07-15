// A conveyor belt has packages that must be shipped from one port to another within days days.

// The ith package on the conveyor belt has a weight of weights[i]. Each day, we load the ship with packages on the conveyor belt (in the order given by weights). We may not load more weight than the maximum weight capacity of the ship.

// Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within days days.

 

// Example 1:

// Input: weights = [1,2,3,4,5,6,7,8,9,10], days = 5
// Output: 15
// Explanation: A ship capacity of 15 is the minimum to ship all the packages in 5 days like this:
// 1st day: 1, 2, 3, 4, 5
// 2nd day: 6, 7
// 3rd day: 8
// 4th day: 9
// 5th day: 10

// Note that the cargo must be shipped in the order given, so using a ship of capacity 14 and splitting the packages into parts like (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) is not allowed.

// let weights = [1,2,3,4,5,6,7,8,9,10], days = 5;
let weights=[1,2,3,1,1],days=4;

console.log(mainFunction());

function mainFunction(){

let max = weights.reduce((ele,prev)=>ele+prev,0);
let min= Math.max(...weights);


let ans;
while(min<=max){
	let mid=Math.floor((min+max)/2);
	let res=returnIfPossible(weights,mid);
	if(res >= days){
		min=mid+1;
		
	}else{

		max=mid-1;
	}
	ans=min;
}
return ans;
}

function returnIfPossible(arr, weight) {
  let d = 1, sum = 0; // Start with day 1

  for (let i = 0; i < arr.length; i++) {
    if (sum + arr[i] > weight) {
      d++;           // Start new day
      sum = 0;
    }
    sum += arr[i];
  }

  return d;
}


//corrected by gpt
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    return mainFunction();
    function mainFunction(){

let max = weights.reduce((ele,prev)=>ele+prev,0);
let min= Math.max(...weights);


let ans=max;
while(min<=max){
	let mid=Math.floor((min+max)/2);
	let res=returnIfPossible(weights,mid);
	// if(res >= days){
	// 	min=mid+1;
		
	// }else{
    //     ans=max;
	// 	max=mid-1;
	// }
     if (res <= days) {
        ans = mid;       // valid capacity
        max = mid - 1;   // try smaller
      } else {
        min = mid + 1;   // need bigger capacity
      }
    
}
return ans;
}

function returnIfPossible(arr, weight) {
  let d = 1, sum = 0; // Start with day 1

  for (let i = 0; i < arr.length; i++) {
    if (sum + arr[i] > weight) {
      d++;           // Start new day
      sum = 0;
    }
    sum += arr[i];
  }

  return d;
}
};