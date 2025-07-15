// let a=[-3,4,5,1,-4,-5];
let a=[1, 2, 5, 3, 1, 2]
//OUTPUT:- [5,1,-4,-5]
let cmax=a[a.length-1];
let leaderArray=[cmax];

for(let i=a.length-2;i>=0;i--){
 if(a[i]>cmax){
     leaderArray.push(a[i]);
     cmax=a[i];
 }
}

console.log(leaderArray)