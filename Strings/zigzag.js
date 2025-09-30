// 6. Zigzag Conversion
// Attempted
// Medium
// Topics
// premium lock icon
// Companies
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"

function zigzag(str, rowNumber) {
  let arr = [];
  for (let i = 0; i < rowNumber; i++) {
    arr.push([]);
  }

  let row = 0,
    col = 0;
  let len = 0;
  while (len < str.length) {
    console.log(col, row, len, "this is col");
    //down
    while (row < rowNumber && len < str.length) {
      console.log(len, str[len], "checking");
      arr[row][col] = str[len];
      len++;
      row++;
    }
    // console.log(arr, "after first column");
    col++;
    row = row - 2;
    //diagonal up
    while (row > 0) {
      arr[row][col] = str[len];
      len++;
      row--;
      col++;
    }
  }
  let s = "";
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j]) s += arr[i][j];
    }
  }

  console.log(s, arr, "this si arr");
}
// zigzag("PAYPALISHIRING", 4);
function test(len, type) {
  if (type) {
    let a = 0,
      b = 1;
    let ans = [a, b];
    for (let i = 2; i < len; i++) {
      ans.push(ans[i - 2] + ans[i - 1]);
    }
    return ans;
  }

}
console.log(test(50, 1));
