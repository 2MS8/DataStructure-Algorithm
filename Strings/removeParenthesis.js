// let s = "(()())(())";
let s="()()"
let stack=[];
let parts=[],lastPop=0;
stack.push(s[0]);

for(let i=1;i<s.length;i++){
	if(s[i]=='('){
		stack.push('(')
	}else{
		// console.log(stack,'before');
		stack.pop();
		// console.log(stack,'after');
	}

	if(!stack.length){
        parts.push(s.slice(lastPop,i+1))
        lastPop=i+1;
	}
}
let fString=""
for(let i=0;i<parts.length;i++){
  for(let j=1;j<parts[i].length-1;j++){
  	fString+=parts[i][j];
  }
}
// parts.push(s.slice(lastPop,i))
console.log(parts,fString);