// 2487. Remove Nodes From Linked List
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You are given the head of a linked list.

// Remove every node which has a node with a greater value anywhere to the right side of it.

// Return the head of the modified linked list.

// Example 1:

// Input: head = [5,2,13,3,8]
// Output: [13,8]
// Explanation: The nodes that should be removed are 5, 2 and 3.
// - Node 13 is to the right of node 5.
// - Node 13 is to the right of node 2.
// - Node 8 is to the right of node 3.

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
    this.current = null;
  }
  insert(data) {
    if (!this.head) {
      this.head = new Node(data, null);
      this.current = this.head;
    } else {
      let currNode = new Node(data, null);
      this.current.next = currNode;
      this.current = currNode;
    }
    this.size++;
  }
  print() {
    let data = [];
    let start = this.head;
    while (start) {
      data.push(start.data);
      start = start.next;
    }
    console.log(data, "this is data");
    return data;
  }
}
const list = new linkedList();
// let arr = [100, 5, 2, 13, 3, 8];
let arr = [3, 4, 1, 2, 5];

for (let i = 0; i < arr.length; i++) {
  list.insert(arr[i]);
}
// list.print();

linkedList.prototype.removeNodes = function () {
  // let deleteStarter = this.head;
  // let iterator = this.head;
  // // let indexSecond=this.head.next;
  // while (iterator.next) {
  //   if (iterator != deleteStarter && iterator.data > deleteStarter.data) {
  //     this.head = iterator;
  //     deleteStarter = iterator;
  //   }
  //   iterator = iterator.next;
  // }
  // console.log(this.head, "current head");
  // while (deleteStarter != iterator) {
  //   if (deleteStarter.next.data < iterator.data) {
  //     deleteStarter = this.head.next;
  //     this.head.next = this.head.next.next;
  //   }
  //   deleteStarter = deleteStarter.next;
  // }
  // console.log("appended", this.head);
};
linkedList.prototype.deleteNodes = function (deleteVal) {
  while (this.head && this.head.data === deleteVal) {
    this.head = this.head.next;
  }

  let prev = this.head;
  let itr = this.head;

  while (itr) {
    if (itr.data === deleteVal) {
      prev.next = itr.next;
      itr = prev.next;
    } else {
      prev = itr;
      itr = itr.next;
    }
  }
};

// linkedList.prototype.deleteNodes = function (deleteVal) {
//   // console.log(this, "current list");
//   let prev = this.head;
//   let itr = this.head;
//   while (itr) {
//     if (itr.data == deleteVal) {
//       if (itr == this.head) {
//         console.log("head hit");
//         this.head = this.head.next;
//         if (!this.head) {
//           console.log("hit");
//           return [];
//         }
//         prev = this.head;
//         itr = this.head;
//       } else {
//         prev.next = itr.next;
//       }
//       itr = prev.next;
//     } else {
//       prev = itr;
//       itr = itr.next;
//     }
//   }
//   // console.log(this.head, "answer");
// };

// 19. Remove Nth Node From End of List
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]

linkedList.prototype.removeNthNode = function (index) {
  let itr = this.head;
  let currSize = 0;
  while (itr) {
    itr = itr.next;
    currSize++;
  }
  const deleteIndex = currSize - index;
  itr = this.head;
  let ind = 0;
  prev = this.head;
  while (itr) {
    if (ind == deleteIndex) {
      if (itr == this.head) {
        this.head = this.head.next;
      } else {
        prev.next = itr.next;
      }
      break;
    }
    ind++;
    prev = itr;
    itr = itr.next;
  }
  // console.log(currSize, "current size");
};

linkedList.prototype.rotate = function () {
  // console.log(this.head, "current list");
  let itr = this.head;
  let previous = null;
  while (itr) {
    let nextNode = itr.next;
    itr.next = previous;
    previous = itr;
    itr = nextNode;
  }
  this.head = previous;
  // console.log(this.head.next.prev, "doubled");
};
linkedList.prototype.findMiddle = function () {
  // console.log(this.size, "size");
  // let itr = this.head;
  // let size = 0;
  // while (itr) {
  //   size++;
  //   itr = itr.next;
  // }
  // let mid = Math.floor(size / 2);
  // ((size = 0), (itr = this.head));
  // while (itr) {
  //   if (size == mid) {
  //     this.head = itr;
  //     break;
  //   }
  //   size++;
  //   itr = itr.next;
  // }

  let fast = this.head;
  let slow = this.head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  this.head = slow;
};

// 3217. Delete Nodes From Linked List Present in Array
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You are given an array of integers nums and the head of a linked list. Return the head of the modified linked list after removing all nodes from the linked list that have a value that exists in nums.

// Example 1:

// Input: nums = [1,2,3], head = [1,2,3,4,5]

// Output: [4,5]
linkedList.prototype.deleteArrayElements = function (arr) {
  let s = new Set(arr);
  console.log(s, "set");

  let prev = this.head;
  let itr = this.head;
  while (itr == this.head && s.has(itr.data)) {
    this.head = this.head.next;
    itr = this.head;
    prev = this.head;
  }

  while (itr) {
    if (s.has(itr.data)) {
      prev.next = itr.next;
      itr = itr.next;
    } else {
      prev = itr;
      itr = itr.next;
    }
  }
};
linkedList.prototype.reverse = function () {
  let itr = this.head;
  let previous = null;
  while (itr) {
    let curr = itr;
    itr = itr.next;
    curr.next = previous;
    previous = curr;
  }
  this.head = previous;
  console.log(this.head, previous, "reversed");
};
linkedList.prototype.reverseRecursively = function () {
  //---------------------------MAJOR THIS INSIDE HERE IS NOT DEFINED AS FUNCTION HAS DIFFERENT MEANING OF THIS-----------
  // function rec(itr, previous) {
  //   if (!itr) {
  //     console.log("condition hit", previous, this.head);
  //     this.head = previous;
  //     return;
  //   }
  //   let curr = itr;
  //   itr = itr.next;
  //   curr.next = previous;
  //   previous = curr;
  //   rec(itr, previous);
  // }
  // rec(this.head, null);
  const rec = (itr, previous) => {
    if (!itr) {
      console.log("condition hit", previous, this.head);
      this.head = previous;
      return;
    }
    let curr = itr;
    itr = itr.next;
    curr.next = previous;
    previous = curr;
    rec(itr, previous);
  };
  rec(this.head, null);
};

linkedList.prototype.detectLoop = function () {
  let slow = this.head;
  let fast = this.head.next.next;
  while (fast) {
    if (slow == fast) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};

linkedList.prototype.startingOfLoop = function () {
  let slow = this.head;
  let fast = this.head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      break;
    }
  }
  //no loop case
  if (!fast || !fast.next) return -1;
  slow = this.head;
  while (slow != fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return fast;
};

linkedList.prototype.palingdromeCheck = function () {
  if (!this.head || !this.head.next) return true;
  let slow = this.head;
  let fast = this.head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // console.log(slow.data, fast, "jjjjj");
  let itr = slow;
  let prev = null;
  while (itr) {
    let curr = itr;
    itr = itr.next;
    curr.next = prev;
    prev = curr;
  }

  // console.log(prev.next.data, "ffff");
  let start = this.head;
  let end = prev;
  while (start) {
    if (start.data != end.data) return false;
    start = start.next;
    end = end.next;
  }
  console.log("true");
  // return;

  // let itr = this.head;
  // let arr = [];
  // let prev = null;
  // while (itr) {
  //   arr.push(itr.data);
  //   let curr = itr;
  //   itr = itr.next;
  //   curr.next = prev;
  //   prev = curr;
  // }
  // this.head = prev;
  // let i = 0;
  // while (this.head) {
  //   if (this.head.data != arr[i]) {
  //     return false;
  //   }
  //   this.head = this.head.next;
  //   i++;
  // }
  // console.log(arr, "data stored", itr);
  // return true;
};
linkedList.prototype.evenOddPresentation = function () {
  if (!this.head.next) return this.head;
  let even = this.head;
  let odd = this.head.next;
  let oddPlace = this.head.next;

  while (even && even.next && odd && odd.next) {
    even.next = odd.next;
    even = even.next;

    odd.next = even.next;
    odd = odd.next;
  }
  // odd = even;
  if (even) {
    even.next = oddPlace;
  }
  // ensure the last node of the even-indexed list points to null
  if (odd) {
    odd.next = null;
  }
  // let itr = this.head;
  // while (true) {
  //   if (!itr.next) {
  //     break;
  //   }
  //   itr = itr.next;
  // }
  // itr.next = oddPlace;
  console.log(oddPlace, this.head, "ddd");
};
linkedList.prototype.deleteMiddle = function () {
  let slow = this.head;
  let fast = this.head;

  let prev = null;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  if (!prev) this.head = null;
  return;
  prev.next = slow.next;
  console.log(slow, prev, this.head, "ffff");
};
linkedList.prototype.mergeSortLinkedList = function () {
  // console.log(this, "currentlist");
  function mergeSort(head) {
    // console.log(findMiddle(head), "middle");
    if (!head || !head.next) return head;
    let middle = findMiddle(head);
    let leftHand = head;
    let rightHand = middle.next;
    middle.next = null;
    let left = mergeSort(leftHand);
    let right = mergeSort(rightHand);
    return merge(left, right);
  }
  function merge(l, r) {
    let dummy = new Node(null, null);
    let current = dummy;
    while (l && r) {
      if (l.data > r.data) {
        current.next = r;
        r = r.next;
      } else {
        current.next = l;
        l = l.next;
      }
      current = current.next;
    }
    //attach remaining
    current.next = l || r;
    return dummy.next;
  }
  // function findMiddle(head) {
  //   // console.log(head, head.next, "sir");
  //   if (!head || !head.next) return head;
  //   let slow = head;
  //   let fast = head.next.next;
  //   while (fast && fast.next && fast.next.next) {
  //     slow = slow.next;
  //     fast = fast.next.next;
  //   }
  //   // console.log(slow, "sloww");
  //   return slow.next;
  // }
  function findMiddle(head) {
    let slow = head;
    let fast = head.next;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow; // node BEFORE middle
  }
  this.head = mergeSort(this.head);
  console.log(this.head, "sorted");
};
list.mergeSortLinkedList();
// list.deleteMiddle();
// console.log(list.detectLoop());
// console.log(list.startingOfLoop(), "jjjj");
// list.palingdromeCheck();
// list.evenOddPresentation();
// list.reverseRecursively();
// list.deleteArrayElements([1, 2, 3]);
// list.deleteNodes(7);
// list.removeNthNode(1);
// list.rotate();
// list.findMiddle();
list.print();
