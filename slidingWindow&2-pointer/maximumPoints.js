// 1423. Maximum Points You Can Obtain from Cards
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// There are several cards arranged in a row, and each card has an associated number of points. The points are given in the integer array cardPoints.

// In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.

// Your score is the sum of the points of the cards you have taken.

// Given the integer array cardPoints and the integer k, return the maximum score you can obtain.

// Example 1:

// Input: cardPoints = [1,2,3,4,5,6,1], k = 3
// Output: 12
// Explanation: After the first step, your score will always be 1. However, choosing the rightmost card first will maximize your total score. The optimal strategy is to take the three cards on the right, giving a final score of 1 + 6 + 5 = 12.
// Example 2:

// Input: cardPoints = [2,2,2], k = 2
// Output: 4
// Explanation: Regardless of which two cards you take, your score will always be 4.
// Example 3:

// Input: cardPoints = [9,7,7,9,7,7,9], k = 7
// Output: 55
// Explanation: You have to take all the cards. Your score is the sum of points of all cards.
function maxPoints(arr, k) {
  let left = [],
    right = [];
  for (let i = 0; i < k; i++) {
    left.push(arr[i]);
  }
  left.reverse();
  if (k != arr.length) {
    for (let i = arr.length - 1; i > arr.length - 1 - k; i--) {
      right.push(arr[i]);
    }
  }
  let subarray = [...left, ...right];
  console.log(subarray, "subarray");
  let i = 0,
    j = 0;
  let maxSum = 0;
  let len = k;
  let finalSum = -Infinity;
  while (j < subarray.length) {
    maxSum += subarray[j];
    len--;
    j++;
    if (!len) {
      finalSum = Math.max(finalSum, maxSum);
      maxSum -= subarray[i];
      i++;
      len++;
    }
    console.log(maxSum, "each stp");
  }

  console.log(finalSum, "maxsum");
}
// console.log(maxPoints([9, 7, 7, 9, 7, 7, 9], 7));

// Input: blocks = "WBBWWBBWBW", k = 7
// Output: 3

function solution(blocks, k) {
  let i = 0,
    j = 0;
  let mp = new Map(),
    len = k,
    minStep = Infinity;
  while (j < blocks.length) {
    mp.set(blocks[j], (mp.get(blocks[j]) || 0) + 1);
    len--;
    j++;
    if (!len) {
      minStep = Math.min(minStep, mp.get("W") || 0);
      mp.set(blocks[i], mp.get(blocks[i]) - 1);
      len++;
      i++;
    }
    // console.log(k, mp, blocks[j], "mp");
    // if (k == 1 && mp.get("B")) return 0;
  }
  return minStep;
}
// console.log(solution("WBWBBBW", 2));
console.log(solution("BB", 1));
