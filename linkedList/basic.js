// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   //insert first
//   insertFirst(data) {
//     this.head = new Node(data, this.head);
//     this.size++;
//   }

//   //insert last (more practical)
//   insertLast(data) {
//     console.log(this.head, "chcking headS");
//     if (!this.head) {
//       this.head = new Node(data, this.head);
//     } else {
//       let current = this.head;
//       while (current.next) {
//         current = current.next;
//       }
//       current.next = new Node(data);
//     }
//   }

//   //insert at a particular position
//   insertAt(data, index) {
//     let currIndex = 0,
//       current = this.head;

//     for (let i = 0; i < index; i++) {
//       currIndex++;
//       if (!current.next) {
//         break;
//       } else {
//         current = current.next;
//       }
//     }
//     if (currIndex != index) {
//       console.log("out of bound");
//       return;
//     } else {
//       let temp = current.next;
//       current.next = new Node(data, temp);
//     }
//   }
//   // delete from any particular index
//   deletefrom(index) {
//     let current = this.head,
//       currIndex = 0,
//       perviousNode;
//     for (let i = 0; i < index; i++) {
//       if (current.next) {
//         perviousNode = current;
//         current = current.next;
//       } else {
//         console.log("out of bound");
//         break;
//       }
//     }
//     perviousNode.next = current.next;
//   }
//   //print
//   printLink() {
//     // console.log(this);
//     let current = this.head;
//     while (current) {
//       console.log(current.data);
//       current = current.next;
//     }
//   }
// }

// let ll = new LinkedList(1, 0);
// console.log(ll, "new");
// ll.insertLast(100);
// ll.insertLast(200);
// ll.insertLast(300);
// ll.insertLast(400);
// ll.printLink();
// ll.deletefrom(1);
// console.log("after");
// // ll.insertAt(99,1);
// ll.printLink();

//
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
let list = new linkedList();
list.insert(100);
// list.insert(200);
// list.insert(200);
list.print();
console.log(list, "currlist");
