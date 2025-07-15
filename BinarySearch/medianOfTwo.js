let a1=[1,3,4,7,10,12];
let a2=[2,3,6,15];

let l1=a1.length,l2=a2.length;

console.log(l1,l2)
if((l1+l2)%2==0){

if(l1<l2){
  let req=Math.floor((l1+l2)/2);
 let left=0,right=l1-1;
 while(left<=right){
 	let mid1=Math.floor((left+right)/2);
    let reqRight=req-(mid1+1);
    if(a1[mid1] < a1[reqRight+1] && a1[mid1+1] >a2[reqRight]){
    	console.log('found');
    	break;
    }else{
    	
    }

}
}else{

}


}else{

}
