// 8. Valid Parenthesis String
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.

// The following rules define a valid string:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "(*)"
// Output: true
// Example 3:

// Input: s = "(*))"
// Output: true
console.log(getValidParenthesis("((**))))"));
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
  return { stack, chance, wrong };
}
