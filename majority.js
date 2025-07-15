// let arr=[1,1,2,2,4,5,1];

// let curr=arr[0],count=1;

// for(let i=1;i<arr.length;i++){
//   if(arr[i]!=curr){
//   	count--;
//   }else{
//   	count++
//   }

//   if(count==0){
//   	curr=arr[i];
//   	count=1;
//   }
// }

// console.log(curr)

//***********MAJORITY ELEMENT N/3**************//

// let arr=[1, 1, 1, 3, 3, 2, 2, 2];

// let can1=null,can2=null,count1=0,count2=0;


// for(let num of arr){
//   if(num==can1){
//     count1++;
//   }else if(num==can2){
//     count2++;
//   }else if(count1==0){
//     can1=num;
//     count1++;
//   }else if(count2==0){
//     can2=num;
//     count2++
//   }else{
//     count1--;
//     count2--;
//   }
// }

// console.log(can1,can2);
// count1=count2=0;
// for(let num of arr){
//   if(num==can1){
//     count1++;
//   }else if(num==can2){
//     count2++;
//   }
// }
// console.log(count1,count2)
// let ans=[];

// if(count1>arr.length/3)ans.push(can1);
// if(count2>arr.length/3)ans.push(can2);


// console.log(ans)

let nums = [2,2,2], val = 2;
// let nums=[4,2,0,2,2,1,4,4,1,4,3,2] , val=4;
// let nums=[0,1,2,2,3,0,4,2], val = 2

let left=0,right=nums.length-1,count=nums.length;
    if(nums[right]==val){right--; count--;}
    while(left<=right){
        if(nums[left]==val){
          // console.log(nums)
          if(nums[right]==val){right--; count--};
            swap(nums,left,right);
            right--;
            count--;
        }
        left++;
    }
    if(nums[right]==val){
      swap(nums,left,right)
    }
    // for(let i=0;i<count;i++){
    //      if(nums[i]==val){
    //       count--;
    //      }
    // }
    console.log(nums,count)
    function swap(arr,i,j){
        let t=arr[i];
        arr[i]=arr[j];
        arr[j]=t;
    }