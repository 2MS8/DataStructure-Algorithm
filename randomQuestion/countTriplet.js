// 3583. Count Special Triplets
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You are given an integer array nums.

// A special triplet is defined as a triplet of indices (i, j, k) such that:

// 0 <= i < j < k < n, where n = nums.length
// nums[i] == nums[j] * 2
// nums[k] == nums[j] * 2
// Return the total number of special triplets in the array.

// Since the answer may be large, return it modulo 1 09 + 7.

// Example 1:

// Input: nums = [6,3,6]

// Output: 1

// Explanation:

// The only special triplet is (i, j, k) = (0, 1, 2), where:

// nums[0] = 6, nums[1] = 3, nums[2] = 6
// nums[0] = nums[1] * 2 = 3 * 2 = 6
// nums[2] = nums[1] * 2 = 3 * 2 = 6
// Example 2:

// Input: nums = [0,1,0,0]

// Output: 1

// Explanation:

// The only special triplet is (i, j, k) = (0, 2, 3), where:

// nums[0] = 0, nums[2] = 0, nums[3] = 0
// nums[0] = nums[2] * 2 = 0 * 2 = 0
// nums[3] = nums[2] * 2 = 0 * 2 = 0
// Example 3:

// Input: nums = [8,4,2,8,4]

// Output: 2

// Explanation:

// There are exactly two special triplets:

// (i, j, k) = (0, 1, 3)
// nums[0] = 8, nums[1] = 4, nums[3] = 8
// nums[0] = nums[1] * 2 = 4 * 2 = 8
// nums[3] = nums[1] * 2 = 4 * 2 = 8
// (i, j, k) = (1, 2, 4)
// nums[1] = 4, nums[2] = 2, nums[4] = 4
// nums[1] = nums[2] * 2 = 2 * 2 = 4
// nums[4] = nums[2] * 2 = 2 * 2 = 4

// Constraints:

// 3 <= n == nums.length <= 105
// 0 <= nums[i] <= 105

// function triplet(arr) {
//   let s = new Set();
//   let m = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     m.set(arr[i], (m.get(arr[i]) || 0) + 1);
//   }
//   for (let i = 0; i < arr.length; i++) {
//     s.add(arr[i] * 2);
//   }
//   let count = 0;
//   console.log(m, s, "map and key");
//   for (let [key, value] of m) {
//     console.log();
//     if (s.has(key * 2)) {
//       let val = m.get(key);
//       console.log(val, "val");
//       if (val > 1) count += 1;
//     }
//   }
//   return count;
// }

function optimal(arr) {
  let m = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!m.has(arr[i])) m.set(arr[i], []);
    m.get(arr[i]).push(i);
  }

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (m.has(val / 2)) {
      let valueArray = m.get(val / 2);
    }
  }
  console.log(m, "this is map");
}
console.log(optimal([8, 4, 2, 8, 4]));
// brute
// function triplet(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let arri = arr[i];
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arri == arr[j] * 2) {
//         for (let k = j + 1; k < arr.length; k++) {
//           if (arr[k] == arr[j] * 2) {
//             console.log(arr[i], arr[j], arr[k], "elements");
//             count++;
//           }
//         }
//       }
//     }
//   }
//   return count;
// }
// console.log(triplet([8, 4, 2, 8, 4]));
// console.log(triplet([37, 9, 24, 12, 12, 24, 52, 35]));

//unsolved

// 3531. Count Covered Buildings
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You are given a positive integer n, representing an n x n city. You are also given a 2D grid buildings, where buildings[i] = [x, y] denotes a unique building located at coordinates [x, y].

// A building is covered if there is at least one building in all four directions: left, right, above, and below.

// Return the number of covered buildings.

// Example 1:

// Input: n = 3, buildings = [[1,2],[2,2],[3,2],[2,1],[2,3]]

// Output: 1

// Explanation:

// Only building [2,2] is covered as it has at least one building:
// above ([1,2])
// below ([3,2])
// left ([2,1])
// right ([2,3])
// Thus, the count of covered buildings is 1.

function coveredBuildings(n, arr) {
  let mx = new Map();
  let my = new Map();
  for (let i = 0; i < arr.length; i++) {
    // m.set(arr[i][0], (m.get(arr[i][0]) || []).push(arr[i][1]));
    if (!mx.has(arr[i][0])) {
      mx.set(arr[i][0], []);
    }
    mx.get(arr[i][0]).push(arr[i][1]);

    if (!my.has(arr[i][1])) {
      my.set(arr[i][1], []);
    }
    my.get(arr[i][1]).push(arr[i][0]);
  }
  let count = 0;
  console.log(mx, my, "maps");
  for (let [x, list] of mx) list.sort((a, b) => a - b);
  for (let [y, list] of my) list.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (mx.has(arr[i][0])) {
      let yrow = mx.get(arr[i][0]);
      // yrow.sort((a, b) => a - b);
      let curry = arr[i][1];
      if (curry > yrow[0] && curry < yrow[yrow.length - 1]) {
        let xrow = my.get(arr[i][1]);
        // xrow.sort((a, b) => a - b);
        let currx = arr[i][0];
        if (currx > xrow[0] && currx < xrow[xrow.length - 1]) {
          count++;
        }
      }
    }
  }
  return count;
}
// console.log(
//   coveredBuildings(3, [
//     [1, 2],
//     [2, 2],
//     [3, 2],
//     [2, 1],
//     [2, 3],
//   ])
// );

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// const strs=["eat","tea","tan","ate","nat","bat"];

// function anagram(strs){
//   let stringMap=new Map();
//   for()
// }
