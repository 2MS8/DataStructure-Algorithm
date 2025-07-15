// let arr=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
let arr=[[1,2,3,4],[5,6,7,8],[9,10,11,12]]


let m=arr.length;
let n=arr[0].length;

let tLength=m*n;

let top=0,bottom=m-1,left=0,right=n-1;
let output=[];

while(top<=bottom && right>=left){

for(let i=left;i<=right;i++){
  output.push(arr[top][i]);
  
  tLength--;
}
top++;

for(let i=top;i<=bottom;i++){
	output.push(arr[i][right])
	tLength--;
}
right--;
if(bottom>=top)
for(let i=right;i>=left;i--){
	
   output.push(arr[bottom][i]);
   tLength--;
}
bottom--;
if(right>=left)
for(let i=bottom;i>=top;i--){
	output.push(arr[i][left])
	tLength--;
}

left++;
}
console.log(output);