// Code
// Testcase
// Test Result
// Test Result
// 84. Largest Rectangle in Histogram
// Hard
// Topics
// premium lock icon
// Companies
// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

// Example 1:

// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.
// Example 2:

// Input: heights = [2,4]
// Output: 4

// Constraints:

// 1 <= heights.length <= 105
// 0 <= heights[i] <= 104

//BRUTE FORCE APPROACH
// console.log(bruteForceHistogram([2, 1, 5, 6, 2, 3]));
// function bruteForceHistogram(arr) {
//   let glbMax = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     let localMax = -Infinity;
//     let currHeight = arr[i],
//       itr = 1;
//     for (let j = i; j < arr.length; j++) {
//       if (arr[j] <= currHeight) {
//         currHeight = arr[j];
//       }
//       localMax = Math.max(currHeight * itr, localMax);
//       itr++;
//     }
//     console.log(localMax, "localmax");
//     glbMax = Math.max(glbMax, localMax);
//   }
//   return glbMax;
// }

// let allStackPattern = {
//   arr: [],

//   nextSmaller() {
//     let stack = [],
//       ans = [];
//     let len = this.arr.length;

//     for (let i = len - 1; i >= 0; i--) {
//       while (stack.length && stack[stack.length - 1].value >= this.arr[i]) {
//         stack.pop();
//       }
//       if (stack.length) {
//         ans[i] = {
//           value: stack[stack.length - 1].value,
//           index: stack[stack.length - 1].index,
//         };
//       } else {
//         ans[i] = { value: -1, index: -1 };
//       }
//       stack.push({ value: this.arr[i], index: i });
//     }
//     return ans;
//   },

//   previousSmaller() {
//     let stack = [],
//       ans = [];
//     let len = this.arr.length;

//     for (let i = 0; i < len; i++) {
//       while (stack.length && stack[stack.length - 1].value >= this.arr[i]) {
//         stack.pop();
//       }
//       if (stack.length) {
//         ans[i] = {
//           value: stack[stack.length - 1].value,
//           index: stack[stack.length - 1].index,
//         };
//       } else {
//         ans[i] = { value: -1, index: -1 };
//       }
//       stack.push({ value: this.arr[i], index: i });
//     }
//     return ans;
//   },
// };

// function optimalHistogram(arr) {
//   allStackPattern.arr = arr;
//   let previous = allStackPattern.previousSmaller(arr);
//   let next = allStackPattern.nextSmaller(arr);

//   console.log(previous, next, "previous and next");
// }
// optimalHistogram([2, 1, 5, 6, 2, 3]);

// class First {
//   constructor(a) {
//     this.a = a;
//   }
//   data = { name: "manav", sirname: "singh", val: { m: this, b: this.a } };
//   method1() {
//     console.log("method1 in console", this.a);
//   }
// }
// class Second extends First {
//   constructor(a) {
//     super(a);
//     super.method1();
//     // console.log(this.a, "from class 1");
//   }
//   printInfo() {
//     console.log(this.data, "data from first");
//   }
// }

// Second.prototype.myFunc = function () {
//   //   console.log("this is prototyped", this);
// };

// let obj = new Second(2);
// obj.myFunc();
// obj.printInfo();
let allStackPattern = {
  arr: [],

  nextSmaller() {
    let stack = [],
      ans = [];
    let len = this.arr.length;

    for (let i = len - 1; i >= 0; i--) {
      while (stack.length && stack[stack.length - 1].value >= this.arr[i]) {
        stack.pop();
      }
      if (stack.length) {
        ans[i] = {
          value: stack[stack.length - 1].value,
          index: stack[stack.length - 1].index,
        };
      } else {
        ans[i] = { value: -1, index: -1 };
      }
      stack.push({ value: this.arr[i], index: i });
    }
    return ans;
  },

  previousSmaller() {
    let stack = [],
      ans = [];
    let len = this.arr.length;

    for (let i = 0; i < len; i++) {
      while (stack.length && stack[stack.length - 1].value >= this.arr[i]) {
        stack.pop();
      }
      if (stack.length) {
        ans[i] = {
          value: stack[stack.length - 1].value,
          index: stack[stack.length - 1].index,
        };
      } else {
        ans[i] = { value: -1, index: -1 };
      }
      stack.push({ value: this.arr[i], index: i });
    }
    return ans;
  },
};

function optimalHistogram(arr) {
  allStackPattern.arr = arr;
  let previous = allStackPattern.previousSmaller();
  let next = allStackPattern.nextSmaller();

  console.log(previous, next, "previous and next");

  let maxArea = 0;
  for (let i = 0; i < arr.length; i++) {
    let left = previous[i].index === -1 ? -1 : previous[i].index;
    let right = next[i].index === -1 ? arr.length : next[i].index;
    let width = right - left - 1;
    let area = arr[i] * width;
    maxArea = Math.max(maxArea, area);
  }

  return maxArea;
}

console.log("Largest Area:", optimalHistogram([2, 1, 5, 6, 2, 3]));
