// 56. Merge Intervals
// Medium
// Topics
// Companies
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// let arr=[[8,10],[1,3],[2,6],[15,18]];
// let mainAns=[],ans=[];

// 	arr.sort((a,b)=>a[0]-b[0])

// // console.log(arr)
// for(let i=0;i<arr.length-1;i++){
// 	if(arr[i][1]>=arr[i+1][0]){
// 		let obj=checkAgain(ans,arr,i);
// 		console.log(obj,'this is obj');
// 		i=obj.currIndex;
//         mainAns=[...obj.ans];
// 	}else{
// 		console.log("inside else",arr[i],i)
// 		mainAns.push(arr[i]);
// 	}
// }

// console.log(mainAns)
// function checkAgain(ans,arr,currIndex){
// 	 ans.push([arr[currIndex][0],arr[currIndex+1][1]]);
// 	 currIndex++;
	
//      if(arr[currIndex][1]>=arr[currIndex+1][0]){
//         checkAgain(ans,arr,currIndex);
//      }else{
//      	return {ans,currIndex};
//      }
// }
// console.log(ans)
let arr=[[8,10],[1,3],[2,6],[15,18]];

let ans=[];
arr.sort((a,b)=>a[0]-b[0])
let curr=arr[0];

for(let i=1;i<arr.length;i++){
	if(curr[1]>=arr[i][0]){
		curr[1]=Math.max(curr[1],arr[i][1]);
	}else{
		ans.push(curr);
		curr=arr[i]
	}
}
ans.push(curr);
console.log(ans);