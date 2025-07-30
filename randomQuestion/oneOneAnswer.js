let arr = [1, 2, 4, 5];

function call(arr) {
  let random = Math.floor(Math.random() * arr.length);
  if (arr[random] != 3 && arr.length > 0) {
    arr.splice(random, 1);
    console.log(random, arr, "check");
    return call(arr);
  }
  if (arr.length > 0) {
    console.log(random, "found");
  } else {
    console.log("not present");
  }
  return;
}
let returnVal = call(arr);
