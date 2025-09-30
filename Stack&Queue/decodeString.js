// 394. Decode String
// Medium
// Topics
// premium lock icon
// Companies
// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.
// Example 1:

// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"
// Example 2:

// Input: s = "3[a2[c]]"
// Output: "accaccacc"
// Example 3:

// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"

// Constraints:

// 1 <= s.length <= 30
// s consists of lowercase English letters, digits, and square brackets '[]'.
// s is guaranteed to be a valid input.
// All the integers in s are in the range [1, 300].

// SHIRE EXAMPLE OF IF I FOCUS I CAN DO ANY PROBLEM
function decode(str) {
  let mainStr = "",
    numStack = [];
  function decodeMe(str, startIndex) {
    let currString = "";
    while (startIndex < str.length) {
      // console.log(currString, "current string");
      if (str[startIndex] == "]") {
        let top = numStack[numStack.length - 1];
        console.log(currString, top, "check ");
        let appendString = currString,
          newString = "";

        while (top > 0) {
          newString = newString + appendString;
          top--;
        }
        currString = newString;

        numStack.pop();
        if (numStack.length) {
          // signStack.pop();
          console.log(newString, startIndex, "newSTring");
          return { newString, startIndex };
        }
        mainStr += currString;
        currString = "";
        startIndex++;
      } else if (parseInt(str[startIndex])) {
        let num = "";
        while (!isNaN(parseInt(str[startIndex]))) {
          num += str[startIndex];
          startIndex++;
        }
        startIndex--;
        // startIndex = st;
        num = parseInt(num);
        console.log(num, "num");
        if (!numStack.length) {
          // signStack.push(str[startIndex + 1]);
          if (currString.length) {
            mainStr += currString;
            currString = "";
          }
          numStack.push(parseInt(num));
          startIndex += 2;
        } else {
          numStack.push(parseInt(num));
          let obj = decodeMe(str, startIndex + 2);
          currString += obj.newString;
          startIndex = obj.startIndex + 1;
          console.log(currString, startIndex, "instance");
        }
      } else {
        currString += str[startIndex];
        startIndex++;
      }
    }
    if (currString.length) {
      mainStr += currString;
    }
    return mainStr;
  }
  console.log(decodeMe(str, 0));
}
// decode("3[a2[c]]");
// decode("abc3[cd]xyz");
// decode("2[abc]3[cd]ef");
decode("10[a]");
