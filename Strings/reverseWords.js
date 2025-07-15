// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.

let s = "the sky is blue";
// let s="  hello world  "

s=s.split(" ");
s=s.reverse();
let extra=[];
let ans=''
for(let i=0;i<s.length;i++){
	console.log(s[i].length)
	if(s[i].length){

		extra.push(s[i])
	}
}
ans=extra.join(" ")
// for(let i=0;i<extra.length;i++){
// 	an
// }

console.log(ans)

