// 1935. Maximum Number of Words You Can Type
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.

// Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all distinct letter keys that are broken, return the number of words in text you can fully type using this keyboard.

// Example 1:

// Input: text = "hello world", brokenLetters = "ad"
// Output: 1
// Explanation: We cannot type "world" because the 'd' key is broken.
// Example 2:

// Input: text = "leet code", brokenLetters = "lt"
// Output: 1
// Explanation: We cannot type "leet" because the 'l' and 't' keys are broken.
// Example 3:

// Input: text = "leet code", brokenLetters = "e"
// Output: 0
// Explanation: We cannot type either word because the 'e' key is broken.

// function returnAnser(text, broken) {
//   let textParts = text.split(" ");
//   let brokenParts = broken.split("");

//   let mapObj = {};
//   textParts.forEach((e) => {
//     mapObj[e] = 0;
//   });
//   console.log(mapObj, "mapobj");
//   for (let i = 0; i < brokenParts.length; i++) {
//     let currBroken = brokenParts[i];

//     for (let j = 0; j < textParts.length; j++) {
//       console.log(textParts[j], currBroken, "cuureent");
//       if (textParts[j].includes(currBroken)) {
//         mapObj[textParts[j]] = 1;
//       }
//     }
//   }
//   console.log(mapObj, "mapobj");
//   let ans = Object.values(mapObj).reduce(function (givenValue, value) {
//     if (!value) givenValue++;
//     return givenValue;
//   }, 0);
//   console.log("answer", ans);
// }
function returnAnswer(text, broken) {
  const brokenSet = new Set(broken);
  const words = text.split(" ");
  console.log(brokenSet);
  let c = 0;
  for (let i = 0; i < words.length; i++) {
    let curr = words[i];
    let check = 0;
    for (let j = 0; j < curr.length; j++) {
      if (brokenSet.has(curr[j])) {
        check = 1;
        break;
      }
    }
    if (check) c++;
  }
  return c;
}

console.log(returnAnswer("leet code", "lt"));
