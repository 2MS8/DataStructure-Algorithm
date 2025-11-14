const arr = [38, 27, 43, 10];

mergeSort(arr, 0, arr.length - 1);

console.log(arr);

function mergeSort(arr, left, right) {
  if (left >= right) return;
  let mid = Math.floor((left + right) / 2);
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  merge(arr, left, mid, right);
}

function merge(arr, left, mid, right) {
  let arr1 = [],
    arr2 = [],
    sorted = [],
    k = left;

  for (let i = left; i <= mid; i++) {
    arr1.push(arr[i]);
  }
  for (let i = mid + 1; i <= right; i++) {
    arr2.push(arr[i]);
  }

  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      sorted.push(arr1[i]);
      i++;
    } else {
      sorted.push(arr2[j]);
      j++;
    }
  }

  if (i == arr1.length) {
    while (j < arr2.length) {
      sorted.push(arr2[j]);
      j++;
    }
  } else {
    while (i < arr1.length) {
      sorted.push(arr1[i]);
      i++;
    }
  }
  for (let i = 0; i < sorted.length; i++) {
    arr[k] = sorted[i];
    k++;
  }
  console.log(arr, "inside");
}
