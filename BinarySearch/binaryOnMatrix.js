// let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 7;

// let matrix=[[1]],target=0;

// let outerLeft=0,outerRight=matrix.length-1,n=matrix[0].length;
// while(outerLeft<=outerRight){
// 	let outerMid=Math.floor((outerLeft+outerRight)/2);
// 	console.log(outerMid,'kk')
// 	if(matrix[outerMid][0] <=target && matrix[outerMid][n-1]>=target ){
//         console.log(matrix[outerMid],'found');
//         let answer=findTarget(matrix[outerMid],target);
//         console.log("Anser : ",answer)
//         break;
// 	}else if(matrix[outerMid][0] > target){
// 		outerRight=outerMid-1;
// 	}else if(matrix[outerMid][n-1] <target){
// 		outerLeft=outerMid+1;
// 	}
// }

// function findTarget(arr,target){
// 	let left=0,right=arr.length-1;
// 	while(left<=right){
// 		let mid=Math.floor((left+right)/2);
// 		if(arr[mid] == target){
// 			return true;
// 		}else if(arr[mid] > target){
// 			right=mid-1
// 		}else{
// 			left=mid+1;
// 		}
// 	}
// 	return false;
// }

let matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
  ],
  target = 5;
// let ans=findElement(matrix,target);
// if(!ans){
// 	ans=columnCheck(matrix,target);
// }
console.log(searchinmeMatrix(matrix, target));
function searchinmeMatrix(matrix, target) {
  let row = 0,
    col = matrix[0].length - 1;
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) return true;
    else if (matrix[row][col] > target) col--;
    else row++;
  }
  return false;
}
// console.log("this is anser",ans)
function findElement(matrix, target) {
  let outerLeft = 0,
    outerRight = matrix.length - 1,
    n = matrix[0].length;
  while (outerLeft <= outerRight) {
    let outerMid = Math.floor((outerLeft + outerRight) / 2);
    console.log(outerMid, "kk");
    if (matrix[outerMid][0] <= target && matrix[outerMid][n - 1] >= target) {
      console.log(matrix[outerMid], "found");
      let answer = findTarget(matrix[outerMid], target);
      console.log("Anser : ", answer);
      return true;
    } else if (matrix[outerMid][0] > target) {
      outerRight = outerMid - 1;
    } else if (matrix[outerMid][n - 1] < target) {
      outerLeft = outerMid + 1;
    }
  }
  return false;
}
function columnCheck(matrix, target) {
  let outerLeft = 0,
    outerRight = matrix.length - 1,
    n = matrix.length - 1;

  while (outerLeft <= outerRight) {
    let outerMid = Math.floor((outerLeft + outerRight) / 2);
    if (matrix[0][outerMid] <= target && matrix[n][outerMid] >= target) {
      return findTarget(matrix[outerMid], target);
    } else if (matrix[0][outerMid] > target) {
      outerLeft = outerMid - 1;
      outerRight = outerMid - 1;
    } else {
      outerLeft = outerMid + 1;
      outerRight = outerMid + 1;
    }
  }
}

function findTarget(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] == target) {
      return true;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
}
