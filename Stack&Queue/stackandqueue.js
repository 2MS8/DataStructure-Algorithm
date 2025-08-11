class Stack {
  constructor() {
    this.arr = [];
  }

  push(item) {
    this.arr.push(item);
  }
  pop() {
    this.arr.pop();
  }

  print() {
    if (!this.arr.length) {
      console.log("Stack is empty");
      return;
    }
    for (let i = 0; i < this.arr.length; i++) {
      console.log(this.arr[i]);
    }
  }
  peek() {
    console.log(this.arr[this.arr.length - 1]);
  }
}
class Queue {
  constructor(length) {
    this.arr = [];
    this.len = length;
  }
  enqueue(element) {
    if (this.arr.length == this.len) {
      console.log("queue is full");
      return;
    }
    this.arr.push(element);
  }
  dequeue() {
    if (this.arr.length == 0) {
      console.log("queue is empty");
      return;
    }
    this.arr.shift();
  }
  print() {
    for (let i = 0; i < this.arr.length; i++) {
      console.log(this.arr[i]);
    }
  }
}
class QueueUsingStack {
  constructor() {
    this.arr = [];
    this.temp = [];
  }
  push(element) {
    this.arr.push(element);
  }

  pop() {
    while (this.arr.length > 1) {
      this.temp.push(this.arr[this.arr.length - 1]);
      this.arr.pop();
    }
    let popped = this.arr.shift();
    for (let i = this.temp.length - 1; i >= 0; i--) {
      this.arr.push(this.temp[i]);
    }
    this.temp = [];
    return popped;
  }

  print() {
    console.log(this.arr);
  }
}
const stack = new Stack();
const queue = new Queue(2);
const queueusingstack = new QueueUsingStack();

queueusingstack.push(10);
queueusingstack.push(20);
queueusingstack.push(30);
queueusingstack.print();
queueusingstack.pop();
queueusingstack.print();
queueusingstack.push(40);
queueusingstack.print();
console.log(queueusingstack.pop());
queueusingstack.print();
