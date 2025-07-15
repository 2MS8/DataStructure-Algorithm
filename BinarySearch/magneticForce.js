// 1552. Magnetic Force Between Two Balls
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// In the universe Earth C-137, Rick discovered a special form of magnetic force between two balls if they are put in his new invented basket. Rick has n empty baskets, the ith basket is at position[i], Morty has m balls and needs to distribute the balls into the baskets such that the minimum magnetic force between any two balls is maximum.

// Rick stated that magnetic force between two different balls at positions x and y is |x - y|.

// Given the integer array position and the integer m. Return the required force.

 

// Example 1:

// Input: position = [1,2,3,4,7], m = 3
// Output: 3
// Explanation: Distributing the 3 balls into baskets 1, 4 and 7 will make the magnetic force between ball pairs [3, 3, 6]. The minimum magnetic force is 3. We cannot achieve a larger minimum magnetic force than 3.
// Example 2:

// Input: position = [5,4,3,2,1,1000000000], m = 2
// Output: 999999999
// Explanation: We can use baskets 1 and 1000000000.
//  
// let positions=[1,2,3,4,7], balls = 3;
let positions=[5,4,3,2,1,1000000000],balls=2;

function magneticForceBinary(positions,balls){
let sortedPositions=positions.sort((a,b)=>a-b);
let maxPossibleDistance=sortedPositions[sortedPositions.length-1]-sortedPositions[0];

let possibleDistance=0;

let left=1,right=maxPossibleDistance;
while(left<=right){
	let mid=Math.floor((left+right)/2);
	if(checkIfPossible(sortedPositions,mid,balls)){
		left=mid+1
	}else{
		right=mid-1;
	}
}
return right;
}

console.log(magneticForceBinary(positions,balls));

function checkIfPossible(sortedPositions,distance,numBalls){
	let count=1;
	let lastBall=sortedPositions[0];
	for(let i=1;i<sortedPositions.length;i++){
		if(sortedPositions[i]-lastBall >= distance){
			count++;
			lastBall=sortedPositions[i];
		}
		if(count>=numBalls)return true;
	}
	return false;
}
// function magneticForceBruteForce(positions,balls){
// let sortedPositions=positions.sort((a,b)=>a-b);
// let maxPossibleDistance=sortedPositions[sortedPositions.length-1]-sortedPositions[0];
// let possibleDistance=0;
// for(let i=1;i<=maxPossibleDistance;i++){
// 	if(checkIfPossible(sortedPositions,i,balls)){
// 		possibleDistance=i
// 	}else{
// 		break;
// 	}
// }
// return possibleDistance;
// }
// console.log(magneticForceBruteForce(positions,balls));

// let arr=[1,2,3,1];

// let m =new Map()

// for(let i=0;i<arr.length;i++){
// 	if(m.has(arr[i])){
// 		m.set(arr[i],m.get(arr[i])+1)
// 	}else{
// 		m.set(arr[i],1);
// 	}
// }
// for(let [_,v] of m){
// 	if(v>1)console.log(true)
// }
// console.log(m)


// let arr=[1,2,3,4,7],m=3;

// let sorted=arr.sort((a,b)=>(a-b));
// let min=sorted[0],max=sorted[sorted.length-1];

// for(let i=min;i<=max;i++){

// }

// function placeballs(distance,arr)

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4];

// let intersect=new Set();
// nums2=nums2.sort((a,b)=>(a-b))
// for(let i=0;i<nums1.length;i++){
// 	console.log(nums1[i],searchBinary(nums2,nums1[i]))
// 	if(searchBinary(nums2,nums1[i])){
// 		intersect.add(nums1[i])
// 	}
// }
// for(let i of intersect){
// 	console.log(i)
// }
// console.log(intersect)
// function searchBinary(arr,num){
// 	let left=0,right=arr.length-1;

// 	while(left<=right){
// 		let mid=Math.floor((left+right)/2);
// 		if(arr[mid]>num){
//            right=mid-1
// 		}else if(arr[mid]<num){
// 			left=mid+1
// 		}else{
// 			return true;
// 		}
// 	}
// 	return false;
// }
// function canPlaceCows(stalls, k, minDist) {
//     let count = 1;
//     let lastCowPos = stalls[0];

//     for (let i = 1; i < stalls.length; i++) {
//         if (stalls[i] - lastCowPos >= minDist) {
//             count++;
//             lastCowPos = stalls[i];
//         }
//         if (count >= k) return true; // All cows placed
//     }

//     return false;
// }

// function aggressiveCowsBruteForce(stalls, k) {
//     stalls.sort((a, b) => a - b); // Always sort first!

//     const maxPossibleDist = stalls[stalls.length - 1] - stalls[0];
//     let bestMinDist = 0;

//     for (let d = 1; d <= maxPossibleDist; d++) {
//         if (canPlaceCows(stalls, k, d)) {
//             bestMinDist = d; // valid distance, try for more
//         } else {
//             break; // further distances won't work
//         }
//     }

//     return bestMinDist;
// }

// // Example usage:
// const stalls = [1, 2, 8, 4, 9];
// const cows = 3;

// console.log(aggressiveCowsBruteForce(stalls, cows)); // Output: 3

// const stalls = [1, 2, 8, 4, 9];
// const cows = 3;

// let sortedStalls=stalls.sort((a,b)=>a-b);

// let maxPossDistance=sortedStalls[sortedStalls.length-1]-sortedStalls[0];
// 	let possDistance=0;
// for(let i=1;i<=maxPossDistance;i++){
// 	if(checkIfPossible(sortedStalls,i,cows)){
// 		possDistance=i
// 	}else{
// 		break;
// 	}
// }
// console.log(possDistance);

// function checkIfPossible(stalls,distance,numCows){
// 	let count=0;
// 	let firstCow=stalls[0];
// 	for(let i=1;i<stalls.length;i++){
//        if(stalls[i]-firstCow >= distance){
//        	count++;
//        }
//        if(count>=numCows)return true;
// 	}
// 	return false;
// }