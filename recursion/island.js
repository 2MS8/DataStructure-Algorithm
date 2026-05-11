// 200. Number of Islands
// Medium
// Topics
// premium lock icon
// Companies
// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input: grid = [
//   ["1", "1", "1", "1", "0"],
//   ["1", "1", "0", "1", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "0", "0", "0"],
// ];
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3
let grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];
let gridLength = grid.length,
  rowLength = grid[0].length;
let seen = new Set(),
  count = 0;
function island() {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (!seen.has(`${i},${j}`) && grid[i][j] == 1) {
        // console.log(i, j, "new island");
        iterate(i, j);
        count++;
      }
    }
  }
}
island();
console.log(count, "anserr");
function iterate(i, j) {
  seen.add(`${i},${j}`);
  console.log(i, j, "indexes", seen);
  if (i + 1 < gridLength && grid[i + 1][j] == 1 && !seen.has(`${i + 1},${j}`)) {
    iterate(i + 1, j);
  }
  if (i - 1 >= 0 && grid[i - 1][j] == 1 && !seen.has(`${i - 1},${j}`)) {
    // seen.add(`${i},${j}`);
    iterate(i - 1, j);
  }
  if (j + 1 < rowLength && grid[i][j + 1] == 1 && !seen.has(`${i},${j + 1}`)) {
    // seen.add(`${i},${j}`);
    iterate(i, j + 1);
  }
  if (j - 1 >= 0 && grid[i][j - 1] == 1 && !seen.has(`${i},${j - 1}`)) {
    // seen.add(`${i},${j}`);
    iterate(i, j - 1);
  }
  //   seen.add(`${i},${j}`);
  console.log("returning from", i, j);
  return;
}
