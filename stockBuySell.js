// Input: prices = [7,1,5,3,6,4]
// Output: 5

let prices=[7,1,5,3,6,4];

//find max price gained between two numbers
// BRUTE FORCE //
// let sum=0;
// for(let i=0;i<prices.length;i++){
// 	for(let j=i+1;j<prices.length;j++){
// 		let diff=prices[i]-prices[j];
// 		if(diff<0){
// 			diff=Math.abs(diff);
// 			if(diff>sum){
// 				sum=diff;
// 			}		
// 		}
// 	}
// }

// console.log(sum)

// OPTIMIZED O(N)
let minPrice=prices[0],maxProfit=0;
for(let i=1;i<prices.length;i++){
	if(prices[i]>minPrice){
		maxProfit=Math.max(maxProfit,prices[i]-minPrice);
	}else{
		minPrice=prices[i];
	}
}

console.log(maxProfit);