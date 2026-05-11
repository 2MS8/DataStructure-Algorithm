// 79. Word Search
// Medium
// Topics
// premium lock icon
// Companies
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example 1:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true
let board = [
  ["C", "A", "A"],
  ["A", "A", "A"],
  ["B", "C", "D"],
];
let word = "AAB",
  jlen = board[0].length,
  ilen = board.length;
function wordSearch(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == word[0]) {
        if (recursion(board, i, j, 1, [`${i},${j}`])) {
          return true;
        }
      }
    }
  }
  return false;
}

let ans = wordSearch(board);
console.log(ans, "ans");
function recursion(board, i, j, wordIndex, ignoreList) {
  console.log("i:", i, "j:", j, wordIndex, word.length, "indexes");
  if (wordIndex >= word.length) return true;
  let rValue = false;
  let operation = [j + 1, j - 1, i + 1, i - 1];
  for (let k = 0; k < operation.length; k++) {
    if (
      operation[k] < jlen &&
      !ignoreList.includes(`${i},${operation[k]}`) &&
      board[i][operation[k]] == word[wordIndex]
    ) {
      rValue = recursion(board, i, operation[k], wordIndex + 1, [
        ...ignoreList,
        `${i},${operation[k]}`,
      ]);
      if (rValue) return rValue;
    }
  }
  return rValue;
}
// function recursion(board, i, j, wordIndex, ignoreList) {
//   console.log("i:", i, "j:", j, wordIndex, word.length, "indexes");
//   if (wordIndex >= word.length) return true;
//   let rValue = false;
//   if (
//     j + 1 < jlen &&
//     !ignoreList.includes(`${i},${j + 1}`) &&
//     board[i][j + 1] == word[wordIndex]
//   ) {
//     rValue = recursion(board, i, j + 1, wordIndex + 1, [
//       ...ignoreList,
//       `${i},${j + 1}`,
//     ]);
//     if (rValue) return rValue;
//   }
//   if (
//     j - 1 >= 0 &&
//     !ignoreList.includes(`${i},${j - 1}`) &&
//     board[i][j - 1] == word[wordIndex]
//   ) {
//     rValue = recursion(board, i, j - 1, wordIndex + 1, [
//       ...ignoreList,
//       `${i},${j - 1}`,
//     ]);
//     if (rValue) return rValue;
//   }
//   if (
//     i + 1 < ilen &&
//     !ignoreList.includes(`${i + 1},${j}`) &&
//     board[i + 1][j] == word[wordIndex]
//   ) {
//     rValue = recursion(board, i + 1, j, wordIndex + 1, [
//       ...ignoreList,
//       `${i + 1},${j}`,
//     ]);
//     if (rValue) return rValue;
//   }
//   if (
//     i - 1 >= 0 &&
//     !ignoreList.includes(`${i - 1},${j}`) &&
//     board[i - 1][j] == word[wordIndex]
//   ) {
//     rValue = recursion(board, i - 1, j, wordIndex + 1, [
//       ...ignoreList,
//       `${i - 1},${j}`,
//     ]);
//     if (rValue) return rValue;
//   }
//   return rValue;
// }
