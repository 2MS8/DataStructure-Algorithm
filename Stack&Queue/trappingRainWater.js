let arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

console.log(trapWater(arr));

function trapWater(arr) {
  let rightGreaterArray = [];
  let rightGreatest = arr[arr.length - 1];

  for (let i = arr.length - 2; i >= 1; i--) {
    rightGreaterArray.push(rightGreatest);
    rightGreatest = Math.max(rightGreatest, arr[i]);
  }
  rightGreaterArray.reverse();

  let leftGreatestArray = [];
  let leftGreatest = arr[0];
  for (let i = 1; i < arr.length - 1; i++) {
    leftGreatestArray.push(leftGreatest);
    leftGreatest = Math.max(leftGreatest, arr[i]);
  }

  let totalWater = 0;
  for (let i = 0; i < rightGreaterArray.length; i++) {
    let min = Math.min(leftGreatestArray[i], rightGreaterArray[i]);
    let water = min - arr[i + 1]; 
    if (water > 0) totalWater += water;
  }

  console.log(leftGreatestArray, rightGreaterArray);
  return totalWater;
}
