//MERGE SORT
let arr = [70, 30, 50, 10];
// function mergeSort(arr) {
//   console.log(arr, "arr");
//   if (arr.length == 1) return;
//   let mid = arr.length / 2;
//   mergeSort(arr.slice(0, mid));
//   mergeSort(arr.slice(mid, arr.length));
//   return;
// }
mergeSort(arr, 0, arr.length - 1);
function mergeSort(arr, left, right) {
  if (left >= right) return;

  const mid = Math.floor(left + (right - left) / 2);
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  // merge(arr, left, mid, right);
  console.log(arr, left, right, mid, "answer");
}
