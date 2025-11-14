// 51. N-Queens
// Hard
// Topics
// premium lock icon
// Companies
// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.
// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.
// Example 1:
// Input: n = 4
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
// Example 2:
// Input: n = 1
// Output: [["Q"]]
let n = 8;
let initialTime = +new Date();

output = [];
function queen(ignoreArr, index, queenArr, level) {
  let makinteger = index.toString() + "," + level.toString();
  //   console.log(
  //     queenArr,
  //     index,
  //     level,
  //     makinteger,
  //     ignoreArr.indexOf(makinteger),
  //     "queenarr"
  //   );
  //console.log(makinteger, "makeinteger");
  if (ignoreArr.length && ignoreArr.indexOf(makinteger) >= 0) {
    // console.log("inside");
    return;
  }
  if (level == n) {
    output.push(queenArr);
    return;
  }
  let currPosition = new Array(n).fill(".");
  currPosition[index] = "Q";
  currPosition = currPosition.join("");
  //push in ignore array
  let ignoreArrData = makeIgnoreList(index, level, n);

  for (let i = 0; i < n; i++) {
    // console.log(ignoreArrData, "jfjjfjf");
    queen(
      [...ignoreArr, ...ignoreArrData],
      i,
      [...queenArr, currPosition],
      level + 1
    );
  }
  return;
}
for (let i = 0; i < n; i++) {
  queen([], i, [], 0);
}
let seen = new Set();
let unique = [];
for (let o of output) {
  let key = JSON.stringify(o);
  if (!seen.has(key)) {
    seen.add(key);
    unique.push(o);
  }
}
console.log((+new Date() - initialTime) / 1000, "timetaken");
console.log(unique.length, "final");

function makeIgnoreList(x, y, n) {
  let ignoreArrData = [];
  let horizontal = [],
    vertical = [],
    diagonal = [];
  for (let i = 0; i < n; i++) {
    horizontal.push(`${i},${y}`);
    vertical.push(`${x},${i}`);
  }
  let x1 = x,
    y1 = y;
  let diff;
  if (x > y) {
    diff = y;
  } else {
    diff = x;
  }
  (x1 = x - diff), (y1 = y - diff);
  while (x1 < n && y1 < n) {
    diagonal.push(`${x1},${y1}`);
    x1++, y1++;
  }
  (x1 = x), (y1 = y);
  //   console.log(x, y, "initial");
  while (x1 < n - 1 && y1 > 0) {
    x1++;
    y1--;
    diagonal.push(`${x1},${y1}`);
  }
  (x1 = x), (y1 = y);
  while (y1 < n - 1 && x1 > 0) {
    x1--, y1++;
    diagonal.push(`${x1},${y1}`);
  }
  //   console.log(horizontal, vertical, diagonal, "horizontalVertical");
  let s = new Set([...horizontal, ...vertical, ...diagonal]);
  //   console.log(s, "this is s");
  for (let i of s) {
    // console.log(i, "iiii");
    ignoreArrData.push(i);
  }
  //diagonal

  return ignoreArrData;
}
// makeIgnoreList(1, 1, 4);
// 5;
