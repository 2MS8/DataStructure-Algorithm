let n=9;
let previous=[1,1];
let ans=[];

for(let i=0;i<n;i++){
	let arr=drawTriangle(i);
  ans.push(arr);
}
console.log(ans)

function drawTriangle(n){

	console.log(n)

 if(n==0) return [1];
 if(n==1) {
 	return [1,1];
 }

 let sum=[],s=0;

 console.log(previous,'previous')
 for(let i=0;i<previous.length;i++){
 	s+=previous[i];
 	if(!i)continue;
 	sum.push(s);
 	s-=previous[i-1];
 }

 let final=[1,...sum,1];
 previous=final;
 return final;
}