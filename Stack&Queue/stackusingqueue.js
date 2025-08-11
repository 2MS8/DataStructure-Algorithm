class StackUsingQueue {
  // do everything in FIFO
  constructor() {
    this.queue = [];
    this.temp = [];
  }
  print() {
    console.log(this.queue);
  }
  pop() {
    if (this.queue.length == 0) {
      console.log("empty");
      return;
    }
    while (this.queue.length > 1) {
      this.temp.push(this.queue.shift());
    }
    let popped = this.queue.shift();
    [this.queue, this.temp] = [this.temp, this.queue];
    return popped;
  }
  push(element) {
    this.queue.push(element);
  }
}
const stackusingqueue=new StackUsingQueue();
