function validParenthesis(str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let curr = str[i];
    if (curr == "{" || curr == "[" || curr == "(") {
      stack.push(curr);
    } else {
      if (curr == "}") {
        if (stack[stack.length - 1] == "{") {
          stack.pop();
        } else {
          return false;
        }
      } else if (curr == "]") {
        if (stack[stack.length - 1] == "[") {
          stack.pop();
        } else {
          return false;
        }
      } else {
        if (stack[stack.length - 1] == "(") {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }
  if (!stack.length) return true;
  return false;
}
console.log(validParenthesis("{]"));
