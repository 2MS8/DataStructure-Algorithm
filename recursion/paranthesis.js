let gArr = [];
function para(arr, n, str) {
  if (n == num) {
    if (getValidParenthesis(str)) gArr.push(str);
    return;
  } else {
    // str += arr[0];
    para(arr, n + 1, str + arr[0]);
    para(arr, n + 1, str + arr[1]);
  }
  return;
}
function getValidParenthesis(str) {
  let stack = [],
    chance = (wrong = 0);
  for (let i = 0; i < str.length; i++) {
    let curr = str[i];
    if (curr == "(") {
      stack.push("(");
    } else if (curr == ")") {
      if (stack[stack.length - 1] != "(" || !stack.length) {
        wrong++;
      } else {
        stack.pop();
      }
    } else {
      chance++;
    }
  }
  if (stack.length && wrong == chance) return false;
  if (chance >= wrong) return true;
  return false;
}

let num = n * 2,
  arr = ["(", ")"];

para(arr, 1, "(");
console.log(gArr);
