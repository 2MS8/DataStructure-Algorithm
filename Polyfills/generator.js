function* gen() {
  console.log("step 1");
  yield 1;
  console.log("step 2");
  yield 2;
  console.log("last");
}
const a = gen();
console.log(a.next());
console.log(a.next());
// console.log(a.throw());
console.log(typeof gen());
for (let i of gen()) {
  console.log(i, "iiii");
}
