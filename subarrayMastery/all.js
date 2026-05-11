// let nums = [1, 12, -5, -6, 50, 3],
//   k = 4;

// question 1
// let nums = [-1],
//   k = 1;
// maxAvgsum();
// function maxAvgsum() {
//   let s = 0,
//     e = 0,
//     maxAvg = -Infinity,
//     sum = 0;
//   while (e < nums.length) {
//     console.log(s, e, sum, "check");
//     if (e - s + 1 == k) {
//       sum += nums[e];
//       console.log(sum, "before");
//       maxAvg = Math.max(maxAvg, sum / k);
//       sum -= nums[s];
//       s++;
//       e++;
//       console.log("inside length k", sum, maxAvg);
//     } else if (e - s + 1 < k) {
//       sum += nums[e];
//       e++;
//     }
//   }
//   // return maxAvg.toFixed(5);
//   console.log(maxAvg.toFixed(5), "answer");
// }

// from gpt
// function maxAvgsum(nums, k) {
//   let s = 0;
//   let sum = 0;
//   let maxAvg = -Infinity;

//   for (let e = 0; e < nums.length; e++) {
//     sum += nums[e];

//     if (e - s + 1 === k) {
//       maxAvg = Math.max(maxAvg, sum / k);
//       sum -= nums[s];
//       s++;
//     }
//   }

//   console.log(maxAvg.toFixed(5));
// }

//----------------------------

// question 3

// let arr = [2, 2, 2, 2, 5, 5, 5, 8],
//   k = 3,
//   threshold = 4;
// thresholdsolution();
// function thresholdsolution() {
//   let left = 0,
//     count = 0,
//     sum = 0;
//   for (let right = 0; right < arr.length; right++) {
//     sum += arr[right];
//     if (right - left + 1 == k) {
//       if (sum / k >= threshold) {
//         count++;
//       }
//       sum -= arr[left];
//       left++;
//     }
//   }
//   console.log(count, "answer");
//   return count;
// }

// question 4

// function countBinarySubstring() {
//   let s = "00110011";
//   let arr = s.split("");

//   let pat = [],
//     lastElement;
//   for (let i = 0; i < arr.length; i++) {
//     if (i == 0) {
//       pat.push(1);
//     } else {
//       if (lastElement == arr[i]) {
//         pat[pat.length - 1] += 1;
//       } else {
//         pat.push(1);
//       }
//     }
//     lastElement = arr[i];
//   }

//   let count = 0;
//   for (let i = 0; i < pat.length - 1; i++) {
//     count += Math.min(pat[i], pat[i + 1]);
//   }
//   // console.log(count, "pat");
//   return count;
// }
// countBinarySubstring();

// question 5
// was doing wrong need prefix sum approach
// let nums = [1, 7, 3, 6, 5, 6];
// let nums = [0, -1, 1];

// let leftSum = 0,
//   rightSum = 0,
//   left = 0,
//   right = nums.length - 1;

// while (left < right) {
//   console.log("inside");
//   if (leftSum < rightSum) {
//     leftSum += nums[left];
//     left++;
//   } else {
//     rightSum += nums[right];
//     right--;
//   }
// }
// console.log(leftSum, rightSum, "sums");
// let nums = [1, 7, 3, 6, 5, 6];

// let sum = nums.reduce((acc, curr) => acc + curr, 0);
// console.log(sum, "sum");
// let leftSum = 0;
// for (let i = 0; i < nums.length; i++) {
//   leftSum += nums[i];

//   let rightSum = sum - leftSum;
//   if (rightSum == leftSum - nums[i]) {
//     console.log(i, "ans");
//     return i;
//   }
// }

// let nums = [1,1,0,1,1,1];

// let maxLen=0,currMax=0;

// for(let i=0;i<nums.length;i++){
//   if(nums[i] == 1){
//     currMax++;
//     maxLen=Math.max(maxLen,currMax);
//   }else{
//     currMax=0;
//   }
// }
// C:\Users\ms210\AppData\Roaming\office-monitor\OfficeMonitor

//to update in resume-
// websocket and socket.io knowledge
//redis caching mechanism
