function add(a, b) {
  if (a.length > b.length) {
    let buff = a.length - b.length;
    let buffString = "";
    for (let i = 0; i < buff; i++) {
      buffString += "0";
    }
    b = buffString + b;
  } else if (b.length > a.length) {
    let buff = b.length - a.length;
    let buffString = "";
    for (let i = 0; i < buff; i++) {
      buffString += "0";
    }
    a = buffString + a;
  }
  let ans = "",
    isCarry = false;
  for (let i = a.length - 1; i >= 0; i--) {
    let adder,
      currSum = "";
    if (isCarry) {
      adder = true;
    }
    if (a[i] == "1" && b[i] == "1") {
      currSum += "0";
      isCarry = true;
    } else if ((a[i] == "1" && b[i] == "0") || (a[i] == "0" && b[i] == "1")) {
      currSum += "1";
      isCarry = false;
    } else {
      currSum += "0";
      isCarry = false;
    }
    if (adder) {
      if (currSum == "1") {
        isCarry = true;
        currSum = "0";
      } else {
        currSum = "1";
      }
    }
    ans += currSum;
  }
  if (isCarry) ans += "1";
  return ans.split("").reverse().join("");
}

console.log(add("1010", "1011"));
