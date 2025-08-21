// 739. Daily Temperatures
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

// Example 1:

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
// Example 2:

// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]
// Example 3:

// Input: temperatures = [30,60,90]
// Output: [1,1,0]
let arr = [89, 62, 70, 58, 47, 47, 46, 76, 100, 70];
//correct [8,1,5,4,3,2,1,1,0,0]
console.log(temperature(arr));
function temperature(arr) {
  let ans = [];
  let stack = [];
  ans.push(0);
  stack.push({ element: arr[arr.length - 1], index: arr.length - 1 });
  for (let i = arr.length - 2; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1].element <= arr[i]) {
      stack.pop();
    }
    if (!stack.length) {
      ans.push(0);
    } else {
      ans.push(stack[stack.length - 1].index - i);
    }
    stack.push({ element: arr[i], index: i });
  }
  return ans.reverse();
}
