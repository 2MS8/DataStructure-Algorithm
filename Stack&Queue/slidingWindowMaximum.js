// 239. Sliding Window Maximum
// Hard
// Topics
// premium lock icon
// Companies
// Hint
// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

// slidingWindowMax([1, 3, -1, -3, 5, 3, 6, 7], 3);
// function slidingWindowMax(arr, k) {
//   let maxArray = [];
//   for (let i = 0; i < arr.length - k + 1; i++) {
//     let lMax = -Infinity;
//     for (let j = i; j < i + k; j++) {
//       lMax = Math.max(lMax, arr[j]);
//     }
//     maxArray.push(lMax);
//   }
//   console.log(maxArray, "answer");
// }

// const dequeueMethod = {
//   arr: [],
//   pushBack: function (element) {
//     this.arr.push(element);
//   },
//   // popBack:function(){},
//   popFront: function () {
//     this.arr.shift();
//   },
//   popBack: function () {
//     this.arr.pop();
//   },
// };

// slidingWindowMax([1, -1], 1);
// // slidingWindowMax([1, 3, -1, -3, 5, 3, 6, 7], 3);
// function slidingWindowMax(arr, k) {
//   let maxArr = [];
//   for (let i = 0; i < k; i++) {
//     console.log(dequeueMethod.arr, "oneachstep");
//     if (!dequeueMethod.arr.length) {
//       dequeueMethod.pushBack(arr[i]);
//     } else if (arr[i] >= dequeueMethod.arr[dequeueMethod.arr.length - 1]) {
//       while (
//         dequeueMethod.arr.length &&
//         arr[i] >= dequeueMethod.arr[dequeueMethod.arr.length - 1]
//       ) {
//         dequeueMethod.popBack();
//       }
//       dequeueMethod.pushBack(arr[i]);
//     } else {
//       dequeueMethod.pushBack(arr[i]);
//     }
//   }
//   console.log(dequeueMethod.arr);
//   maxArr.push(dequeueMethod.arr[0]);
//   for (let i = k; i < arr.length; i++) {
//     if (!dequeueMethod.arr.length) {
//       dequeueMethod.pushBack(arr[i]);
//     } else if (arr[i] >= dequeueMethod.arr[dequeueMethod.arr.length - 1]) {
//       while (
//         dequeueMethod.arr.length &&
//         arr[i] >= dequeueMethod.arr[dequeueMethod.arr.length - 1]
//       ) {
//         dequeueMethod.popBack();
//       }
//       if (dequeueMethod.arr.length >= k) {
//         dequeueMethod.popFront();
//       }
//       dequeueMethod.pushBack(arr[i]);
//     } else {
//       if (dequeueMethod.arr.length >= k) {
//         dequeueMethod.popFront();
//       }
//       dequeueMethod.pushBack(arr[i]);
//     }
//     maxArr.push(dequeueMethod.arr[0]);
//   }
//   console.log(maxArr, "this is maxarray");
// }
// function slidingWindowMax(nums, k) {
//   let dq = []; // will store indices
//   let result = [];

//   for (let i = 0; i < nums.length; i++) {
//     // 1. Remove indices out of the current window
//     if (dq.length && dq[0] <= i - k) {
//       dq.shift();
//     }
//     // 2. Maintain monotonic decreasing deque
//     while (dq.length && nums[dq[dq.length - 1]] < nums[i]) {
//       dq.pop();
//     }
//     // 3. Push current index
//     dq.push(i);
//     // 4. First valid window starts at i >= k - 1
//     if (i >= k - 1) {
//       result.push(nums[dq[0]]);
//     }
//   }

//   return result;
// }

//EITHER THIS RUN OR I TRY MULTIPLE TIMES
function slidingWindowMax(arr, k) {
  let deque = [],
    ans = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(deque, "on step:", i, "answer", ans);

    if (deque.length && deque[0] <= i - k) {
      deque.shift();
    }

    while (deque.length && arr[i] >= arr[deque[deque.length - 1]]) {
      deque.pop();
    }
    deque.push(i);

    if (i >= k - 1) {
      //   deque.push(i);
      ans.push(arr[deque[0]]);
    }
  }
  return ans;
}
console.log(slidingWindowMax([1, 3, 1, 2, 0, 5], 3));
// [1, -1]
// console.log(slidingWindowMax([1, 3, -1, -3, 5, 3, 6, 7], 3));
// [3, 3, 5, 5, 6, 7]
