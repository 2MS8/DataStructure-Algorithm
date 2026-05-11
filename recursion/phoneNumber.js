let dict = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

let num = 23,
  level = [];
for (let i = 0; i < num.toString().length; i++) {
  level.push(dict[num.toString()[i]]);
}
let ans = [];

function phone(arr, index) {
  if (index == level.length) {
    ans.push(arr.join(""));
    return;
  }
  for (let i = 0; i < level[index].length; i++) {
    phone([...arr, level[index][i]], index + 1);
  }
}
phone([], 0);
console.log(ans, "ans");
