// 3147. Taking Maximum Energy From the Mystic Dungeon
// Attempted
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// In a mystic dungeon, n magicians are standing in a line. Each magician has an attribute that gives you energy. Some magicians can give you negative energy, which means taking energy from you.

// You have been cursed in such a way that after absorbing energy from magician i, you will be instantly transported to magician (i + k). This process will be repeated until you reach the magician where (i + k) does not exist.

// In other words, you will choose a starting point and then teleport with k jumps until you reach the end of the magicians' sequence, absorbing all the energy during the journey.

// You are given an array energy and an integer k. Return the maximum possible energy you can gain.

// Note that when you are reach a magician, you must take energy from them, whether it is negative or positive energy.

// Example 1:

// Input: energy = [5,2,-10,-5,1], k = 3

// Output: 3

// Explanation: We can gain a total energy of 3 by starting from magician 1 absorbing 2 + 1 = 3.

// Example 2:

// Input: energy = [-2,-3,-1], k = 2

// Output: -1

// Explanation: We can gain a total energy of -1 by starting from magician 2.
console.log(magician([5, 2, -10, -5, 1], 3));
console.log(magician([5, -10, 4, 3, 5, -9, 9, -7], 2));
// function magician(arr, k) {
//   let gmax = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     let j = i,
//       sum = 0;
//     while (j < arr.length) {
//       sum += arr[j];
//       j += k;
//     }
//     gmax = Math.max(gmax, sum);

//     //     let j = i,
//     //       sum = 0;
//     //     while (j < arr.length) {
//     //       sum += arr[j];
//     //       j += k;
//     //     }
//     //     gmax = Math.max(gmax, sum);
//   }
//   return gmax;
// }

// function magician(arr, k) {
//   let count = 0,
//     prevIndex;
//   let hashArray = new Array(arr.length).fill(0);
//   for (let i = 0; i < arr.length; i++) {
//     prevIndex = i - k;
//     if (prevIndex >= 0) hashArray[prevIndex] += arr[i];
//     hashArray[i] += arr[i];
//   }
//   console.log(hashArray, "hasharray");
//   return hashArray.reduce((val, element) => {
//     // console.log(element, element, "inside");
//     val = Math.max(val, element);
//     return val;
//   }, -Infinity);
//   //   console.log(hashArray, "answer array");
// }
function magician(arr, k) {
  let ans = -Infinity;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (i + k < arr.length) arr[i] += arr[i + k];
    ans = Math.max(ans, arr[i]);
  }
  return ans;
}
