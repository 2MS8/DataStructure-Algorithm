// finding all sort of patterns in stack , nge,nse,pge,pse

class allStackPattern {
  constructor(arr) {
    this.arr = arr;
  }

  nextSmaller() {
    let stack = [],
      ans = [];
    let len = this.arr.length - 1;
    stack.push(this.arr[len]);
    ans.push(-1);
    len--;
    for (let i = len; i >= 0; i--) {
      while (stack.length && stack[stack.length - 1] >= this.arr[i]) {
        stack.pop();
      }
      ans.push(stack.length ? stack[stack.length - 1] : -1);
      stack.push(this.arr[i]);
    }
    return ans.reverse();
  }
  nextGreater() {
    let stack = [],
      ans = [];
    let len = this.arr.length - 1;
    stack.push(this.arr[len]);
    ans.push(-1);
    len--;
    for (let i = len; i >= 0; i--) {
      while (stack.length && stack[stack.length - 1] <= this.arr[i]) {
        stack.pop();
      }
      ans.push(stack.length ? stack[stack.length - 1] : -1);
      stack.push(this.arr[i]);
    }
    return ans.reverse();
  }
  previousSmaller() {
    let stack = [],
      ans = [];
    let len = this.arr.length - 1;
    ans.push(-1);
    stack.push(this.arr[0]);
    for (let i = 1; i <= len; i++) {
      while (stack.length && stack[stack.length - 1] >= this.arr[i]) {
        stack.pop();
      }
      ans.push(stack.length ? stack[stack.length - 1] : -1);
      stack.push(this.arr[i]);
    }
    return ans;
  }
  previousGreater() {
    let stack = [],
      ans = [];
    let len = this.arr.length - 1;
    ans.push(-1);
    stack.push(this.arr[0]);
    for (let i = 1; i <= len; i++) {
      while (stack.length && stack[stack.length - 1] <= this.arr[i]) {
        stack.pop();
      }
      ans.push(stack.length ? stack[stack.length - 1] : -1);
      stack.push(this.arr[i]);
    }
    return ans;
  }
}
let arr = [1, 4, 3, 7, 3, 7, 8, 1];
let method = new allStackPattern(arr);
console.log(method.previousSmaller());
// console.log(method.nextGreater());
// console.log(method.nextSmaller());
