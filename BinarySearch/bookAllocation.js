let books=[25,46,28,49,24];
let students=4;



let left=books.reduce((e,i)=>Math.max(e,i))
let right=books.reduce((e,i)=>e+i,0);
// console.log(left,right);


console.log(findAnswer(books,50,students))
function findAnswer(books,maxPages,students){
 let storedMax=maxPages;
 for(let i=0;i<books.length;i++){
  
	if(maxPages!=storedMax && maxPages>books[i]){
   		maxPages-=books[i];
   		students--;
       continue;
   	}
   	
   if(maxPages>books[i]){
   	maxPages-=books[i]
   	students--;
   }else if(maxPages<books[i]){
     maxPages=storedMax;
   }else{
   	students--;
   	maxPages=storedMax;
   }

   
 }
 if(students>0)return false;
 return true;

}