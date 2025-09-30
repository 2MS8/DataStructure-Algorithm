// 735. Asteroid Collision
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// We are given an array asteroids of integers representing asteroids in a row. The indices of the asteriod in the array represent their relative position in space.

// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

// Example 1:

// Input: asteroids = [5,10,-5]
// Output: [5,10]
// Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
// Example 2:

// Input: asteroids = [8,-8]
// Output: []
// Explanation: The 8 and -8 collide exploding each other.
// Example 3:

// Input: asteroids = [10,2,-5]
// Output: [10]
// Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.

// function asteroid(arr) {
//   let ans = [];
//   for (let i = 0; i < arr.length; i++) {
//     //PUSH IF EMPTY
//     if (!ans.length) {
//       ans.push(arr[i]);
//       continue;
//     }
//     //PUSH IF POSITIVE
//     if (arr[i] > 0) {
//       ans.push(arr[i]);
//     } else {
//       //IS TOP ELEMENT NEGATIVE
//       if (ans[ans.length - 1] < 0) {
//         ans.push(arr[i]);
//         continue;
//       } else {
//         //COMPARISON STARTS
//         if (ans[ans.length - 1] < 0 || !ans.length) {
//           ans.push(arr[ans.length - 1]);
//           continue;
//         }
//         while (ans.length) {
//           let j = ans.length - 1;
//           if (ans[j] == Math.abs(arr[i])) {
//             ans.pop();
//             break;
//           } else if (ans[j] < Math.abs(arr[i])) {
//             ans.pop();
//             if (!ans.length) {
//               ans.push(arr[i]);
//               break;
//             }
//           } else {
//             break;
//           }
//         }
//       }
//     }
//   }
//   return ans;
// }

function asteroid(arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];

    // PUSH IF EMPTY
    if (!ans.length) {
      ans.push(curr);
      continue;
    }

    // PUSH IF POSITIVE OR TOP IS NEGATIVE
    if (curr > 0 || ans[ans.length - 1] < 0) {
      ans.push(curr);
      continue;
    }

    // COLLISION CASE
    while (ans.length && ans[ans.length - 1] > 0) {
      let top = ans[ans.length - 1];

      if (top === Math.abs(curr)) {
        ans.pop(); // both destroyed
        curr = null;
        break;
      } else if (top < Math.abs(curr)) {
        ans.pop(); // top destroyed, check again
      } else {
        curr = null; // current destroyed
        break;
      }
    }

    if (curr !== null) {
      ans.push(curr);
    }
  }
  return ans;
}

// Tests
console.log(asteroid([5, 10, -5])); // [5, 10]
console.log(asteroid([8, -8])); // []
console.log(asteroid([10, 2, -5])); // [10]
console.log(asteroid([1, -2, -2, -2])); // [-2, -2, -2]
console.log(asteroid([4, 7, 1, 1, 2, -3, -7, 17, 15, -16]));
// [4, 7, 17, 15]

// console.log(asteroid([1, -2, -2, -2]));
console.log(asteroid([4, 7, 1, 1, 2, -3, -7, 17, 15, -16]));
function asteriodCollision(arr) {
  let stack = [],
    ans = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    // if(arr[i] > 0 && !stack.length) ans.push(arr[i]);
    if (arr[i] < 0) {
      stack.push(arr[i]);
    } else {
      let top,
        remaining = [arr[i]];
      while (Math.abs(stack[stack.length - 1]) <= remaining) {
        remaining = -Math.abs(stack[stack.length - 1]);
        top = stack[stack.length - 1];
        stack.pop();
      }
      if (!stack.length && arr[i] != Math.abs(top)) ans.push(arr[i]);
    }
  }
  console.log(stack, ans, "stack");
  if (stack.length) {
    stack.reverse();
    while (stack.length) {
      ans.push(stack[stack.length - 1]);
      stack.pop();
    }
  }
  return ans.reverse();
}
// console.log(asteroid([-2, 1, -1, -1]));
// console.log(asteriodCollision([10, 5, -7, 10, 2, -3]));
// console.log(asteroid([8, -8]));
// console.log(asteriodCollision([-2, -1, 1, 2]));
