// 202. Happy Number
// Attempted
// Easy
// Topics
// premium lock icon
// Companies
// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

 

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false
 console.log(happyNumber(7))
function happyNumber(num){

let getAns=calculateFromString(num);
if(!getAns)return false;

if(getAns==1)return true;

return happyNumber(getAns);

}

function calculateFromString(str){
	str=str.toString();
str=str.split("");
let ans=0;
if(str.length){
	for(let i=0;i<str.length;i++){
      ans=ans+Math.pow(parseInt(str[i]),2);
	}
}else{
	return false;
}
return ans;
}