function returnSquareRoot(n,precision){
   if(n==0 || n==1) return n;
   if(n<0)return NaN;
   let left=0,right=n,mid
   while((right - left) > Math.pow(10, -precision)){
   	mid=(left+right)/2;

   	// if(right-left < 1/Math.pow(10,precision))return mid;
   	if(mid*mid*mid > n){
   		right=mid;
   	}else{
        left=mid;
   	}
   }
   return mid.toFixed(3)
}
console.log(returnSquareRoot(27,3))
// function returnSquareRoot(n, precision = 6) {
//     if (n < 0) return NaN;
//     if (n === 0 || n === 1) return n;

//     let left = 0, right = n;
//     let mid;

//     // For numbers less than 1 (like 0.25), we set right = 1
//     if (n < 1) right = 1;

//     while ((right - left) > Math.pow(10, -precision)) {
//         mid = (left + right) / 2;
//         if (mid * mid < n) {
//             left = mid;
//         } else {
//             right = mid;
//         }
//     }

//     // Round to specified precision
//     return Number(((left + right) / 2).toFixed(precision));
// }
