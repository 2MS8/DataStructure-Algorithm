function promise1(t, status) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (!status) rej("rejected from here");
      res("Promise 1 resolved");
    }, t);
  });
}

// (async () => {
//   let arr = await Promise.all([promise1(1000, 1), promise1(3000, 0)]);
//   console.log(arr, "this is arr");
// })();

const myPromiseAll = function (arr) {
  return new Promise((res, rej) => {
    let output = [],
      len = arr.length - 1;
    arr.forEach((element, index) => {
      Promise.resolve(element)
        .then((e) => {
          output.push(e);
          if (index == len) {
            res(output);
          }
        })
        .catch((err) => {
          rej(err);
        });
    });
  });
};

(async () => {
  try {
    let arr = await myPromiseAll([promise1(1000, 1), promise1(3000, 0)]);
    console.log(arr, "arr");
  } catch (error) {
    console.log(error, "error");
  }
})();
