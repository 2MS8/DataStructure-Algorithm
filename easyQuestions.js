// Longest Common Prefix
// Easy
// Topics
// premium lock icon
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// let strs = ["flower","flow","flight"];
// let strs=["dog","racecar","car"];
// console.log(abc(strs))
// function abc(strs){
// let ans=[...strs[0]];
// for(let i=1;i<strs.length;i++){
//    let currString=strs[i];
//     let temp=[]
//    for(let j=0;j<ans.length;j++){
//      if(currString[j]==ans[j]){
//         temp.push(currString[j])
//      }else{
//         break;
//      }
//    }
//    ans=temp;
// }
// let ansString=''
// if(ans.length>0){
//   for(let i=0;i<ans.length;i++){
//     ansString+=ans[i];
//   }
// }

// return ansString;
// }
// let ans=strs[0];


// for(let i=1;i<strs.length;i++){
// 	let currStr=strs[i];
//     let itr=0;
//     console.log(currStr[itr],ans[itr])
// 	while(currStr[itr]==ans[itr]){
//       itr++;
// 	}
// 	if(!itr){
// 		ans=[];
// 	}else{
// 		ans=ans.slice(0,itr);
// 	}
// }

// console.log(ans)


// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

 

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].
//  let num=[9,9];
//  // let num=[9,9];

// function result(num){
// //9 condition
// if(num.length==1 && num[0]==9){
//   return [1,0];
// }

// //1-9 condition
// if(num[num.length-1]!=9){
//   num[num.length-1]+=1;
//   return num;
// }

// let remaining=1,ans=[];
// ans.push(0);
// for(let i=num.length-2;i>=0;i--){
//   if(remaining){
//     let sum=num[i]+1;
//     if(sum>9){
//       ans.push(0);
//     }else{
//        ans.push(sum);
//        remaining=0;
//     }
//   }else{
//     ans.push(num[i]);
//   }
// }

// if(remaining)ans.push(remaining);
// ans=ans.reverse()
// return ans;
// }
// console.log(result(num))


let a='1',b='4';




function myfunc(a){
  let aPow=Math.pow(10,a.length-1)
  let ansa=0
  for(let i=0;i<a.length;i++){
  ansa=a[i]*aPow +ansa;
  aPow/=10;
}
  return ansa;

}

let ans=myfunc(a);
ans=ans.toString*
console.log( ans)


