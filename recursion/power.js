// 50. Pow(x, n)
// Medium
// Topics
// premium lock icon
// Companies
// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25

let x = 8.88023,
  n = 3;
let result = returnPower(x, Math.abs(n) - 1, x);

if (n < 0) {
  result = 1 / result;
}

console.log(result.toFixed(5), "this is result");

function returnPower(base, pow, num) {
  if (pow > 0) {
    return returnPower(base, pow - 1, num * base);
  }
  return num;
}
// let newn = Math.abs(n);
// let result = returnPower(x, x, newn - 1);
// if (n < 0) {
//   result = 1 / result;
// }

// console.log(result, "this is result");
// function returnPower(base, num, pow) {
//   if (pow > 0) {
//     num = num * base;
//     return returnPower(base, num, pow - 1);
//   }
//   return parseFloat(num.toFixed(4));
// }
// let x = 2.0,
//   n = -2;

// let result = returnPower(x, Math.abs(n));

// if (n < 0) {
//   result = 1 / result;
// }

// console.log(result.toFixed(5), "this is result");

// function returnPower(base, power) {
//   if (power === 0) return 1;

//   const half = returnPower(base, Math.floor(power / 2));
//   let result = half * half;

//   if (power % 2 === 1) {
//     result *= base;
//   }

//   return result;
// }
