// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.

// let s = "the sky is blue";
// // let s="  hello world  "

// s=s.split(" ");
// s=s.reverse();
// let extra=[];
// let ans=''
// for(let i=0;i<s.length;i++){
// 	console.log(s[i].length)
// 	if(s[i].length){
// 	 extra.push(s[i])
// 	}
// }
// ans=extra.join(" ")


// console.log(ans)
// function findAns(num) {
//   for (let i = num.length - 1; i >= 0; i--) {
//     const digit = num[i];
//     if (parseInt(digit) % 2 === 1) {
//       return num.slice(0, i + 1);
//     }
//   }
//   return "";
// }


// let arr=[3,4,5,1,2];
let arr=[2,1,3,4]
function abc(arr,start,end,count){
for(let i=start;i<end;i++){
  if(arr[i] > arr[i+1]){
    if(count<1){
      count++;
      return abc(arr,i+1,arr.length-1,count)
    }else{
      return false;
    }
  }
}
return true;
}
console.log(abc(arr,0,arr.length-1,0));

var isValidWord = function(word) {
  if (word.length < 3) return false;

  let hasVowel = false;
  let hasConsonant = false;

  for (let char of word) {
    if (!/[a-zA-Z0-9]/.test(char)) return false;

    if (/[aeiouAEIOU]/.test(char)) {
      hasVowel = true;
    } else if (/[a-zA-Z]/.test(char)) {
      hasConsonant = true;
    }
  }

  return hasVowel && hasConsonant;
};