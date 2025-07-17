// let arr=[-1,0,1,2,-1,-4];
// let ans=[]

// for(let i=0;i<arr.length;i++){
// 	let sum=arr[i];
// 	for(let j=i+1;j<arr.length;j++){
// 		sum+=arr[j];
// 		for(let k=j+1;k<arr.length;k++){
// 			if(sum+arr[k]==0){
//               ans.push([arr[i],arr[j],arr[k]]);
// 			}
// 		}
// 		sum=arr[i]
// 	}
// }

// console.log(ans)

// let arr = [-1, 0, 1, 2, -1, -4];
// let ans = [];
// let unique = new Set();

// for (let i = 0; i < arr.length; i++) {
// 	for (let j = i + 1; j < arr.length; j++) {
// 		for (let k = j + 1; k < arr.length; k++) {
// 			if (arr[i] + arr[j] + arr[k] === 0) {
// 				let triplet = [arr[i], arr[j], arr[k]].sort((a, b) => a - b); // normalize
// 				let key = triplet.join(','); // convert to string for Set
// 				if (!unique.has(key)) {
// 					unique.add(key);
// 					ans.push(triplet);
// 				}
// 			}
// 		}
// 	}
// }

// console.log(ans);

//*******************TLE**************************//

// let arr = [-1, 0, 1, 2, -1, -4];
// let ans = [];
// arr=arr.sort((a,b)=>a-b)

// for(let i=0;i<arr.length-2;i++){
// 	let a=i+1,b=arr.length-1;
// 	while(a<b){
// 		let sum=arr[i] + arr[a] + arr[b];
// 		console.log(sum)
// 		if(sum == 0){
// 			ans.push([arr[i],arr[a],arr[b]]);
// 			a++;
// 			b--;
// 		}else if(sum < 0){
//             a++;
// 		}else{
//             b--;;
// 		}
// 	}	
// } 

// let s=new Set(),finalAns=[];

// for(let i of ans){
// 	let str=i.sort((a,b)=>a-b).join("");
// 	if(!s.has(str)){
//         finalAns.push(i);
//         s.add(str)
// 	}
// }

// console.log(finalAns);

let arr=[-1, 0, 1, 2, -1, -4];
let ans=[];
arr=arr.sort((a,b)=>(a-b))
for(let i=0;i<arr.length;i++){

	if(arr[i]==arr[i-1] && i>0)continue;
	let j=i+1,k=arr.length-1;

	while(j<k){
		let sum=arr[i]+arr[j]+arr[k];
		console.log(sum,'this is sum')
		if(sum === 0){
           ans.push([arr[i],arr[j],arr[k]]);
           while(j<k && arr[j]==arr[j+1])j++;
           while(k>j && arr[k] == arr[k-1])k--;
           j++;
           k--;
		}else if(sum > 0){
             k--;
		}else{
			j++;
		}
	}
}
console.log(ans)