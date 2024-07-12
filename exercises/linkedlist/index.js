// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
    // this.insertAt(data, 0);
  }

  size() {
    let counter = 0;
    let node = this.head;
    
    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
    // this.getAt(0);
  }

  getLast() {
    if (!this.head) {
      return;
    } else {
      let node = this.head;

      while (node.next) {
        node = node.next;
      }

      return node;
    }
    // return this.getAt(this.size() - 1);
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      this.clear();
    } else {
      this.head = this.head.next;
    }
  }

  removeLast() {
    let node = this.head;

    if (!node) {
      return;
    }

    let last = this.getLast();

    if (node === last) {
      this.clear();
    } else {
      while (node.next != last) {
        node = node.next
      }
  
      node.next = null;
    }
  }

  insertLast(data) {
    const last = this.getLast();
    const newNode = new Node(data);

    if (last) {
      last.next = newNode;
    } else {
      this.head = newNode;
    }
    
  }

  getAt(n) {
    let node = this.head;

    if (!node || n === 0 || this.size() < n) {
      return node;
    } else {
      for (let i = 0; i < n; i++) {
        node = node.next;
      }

      return node;
    }
  }

  removeAt(n) {
    if (n === 0 || !this.head) {
      return this.removeFirst();
    }

    const prevNode = this.getAt(n - 1);
    
    if (!prevNode || !prevNode.next) {
      return;
    } else {
      prevNode.next = prevNode.next.next;
    }
  }

  insertAt(data, n) {
    if (!this.head || n === 0) {
      this.insertFirst(data);
    } else if (n >= this.size()) {
      this.insertLast(data);
    } else {
      const current = this.getAt(n);
      const previous = this.getAt(n - 1);

      previous.next = new Node(data, current);
    }
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };



// SG SOLUTIONS

class SgLinkedList {
  constructor() {
    this.head = null;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    } else if (!this.head.next) {
      this.head = null;
      return;
    } else {
      let previous = this.head;
      let node = this.head.next;
      while (node.next) {
        previous = node;
        node = node.next;
      }
      previous.next = null;
    }
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      // There are some existing nodes in our chain
      last.next = new Node(data);
    } else {
      // The chain is empty!
      this.head = new Node(data);
    }
  }

  getAt(index) {
    if (!this.head) {
      return null;
    }

    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return null;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    } else {
      previous.next = previous.next.next;
    } 
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }
}