const SYMBOL_LENGTH = Symbol('length');
const SYMBOL_HEAD = Symbol('head');

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this[SYMBOL_LENGTH] = 0;
    this[SYMBOL_HEAD] = null;
  }

  append(element) {
    if (this[SYMBOL_HEAD]) {
      let current = this[SYMBOL_HEAD];
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(element);
    } else {
      this[SYMBOL_HEAD] = new Node(element);
    }
    this[SYMBOL_LENGTH]++;
    return true;
  }

  insert(position, element) {
    if (position < 0 || position > this[SYMBOL_LENGTH]) return false;
    if (position === 0) {
      const newNode = new Node(element);
      newNode.next = this[SYMBOL_HEAD];
      this[SYMBOL_HEAD] = newNode;
    } else {
      let previous = this[SYMBOL_HEAD];
      let current = previous.next;
      let index = position - 1;
      const newNode = new Node(element);
      while (index) {
        previous = current;
        current = current.next;
        index--;
      }
      newNode.next = current;
      previous.next = newNode;
    }
    this[SYMBOL_LENGTH]++;
    return true;
  }

  remove(element) {
    if (this[SYMBOL_LENGTH] === 0) return false;
    if (this[SYMBOL_HEAD].element === element) {
      this[SYMBOL_HEAD] = this[SYMBOL_HEAD].next;
      this[SYMBOL_LENGTH]--;
      return true;
    }
    let previous = this[SYMBOL_HEAD];
    let current = previous.next;
    do {
      if (current.element === element) {
        previous.next = current.next;
        current.next = null;
        this[SYMBOL_LENGTH]--;
        return true;
      }
      previous = current;
      current = current.next;
    } while (current);
    return false;
  }

  indexOf(element) {
    if (this[SYMBOL_LENGTH] === 0) return -1;
    let current = this[SYMBOL_HEAD];
    for (let i = 0; i < this[SYMBOL_LENGTH]; i++) {
      if (current.element === element) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  removeAt(position) {
    if (position < 0 || position >= this[SYMBOL_LENGTH]) return false;
    if (position === 0) {
      this[SYMBOL_HEAD] = this[SYMBOL_HEAD].next;
    } else {
      let previous = this[SYMBOL_HEAD];
      let current = previous.next;
      let index = position - 1;
      while (index) {
        previous = current;
        current = current.next;
        index--;
      }
      previous.next = current.next;
      current.next = null;
    }
    this[SYMBOL_LENGTH]--;
    return true;
  }

  isEmpty() {
    return this[SYMBOL_LENGTH] === 0;
  }

  size() {
    return this[SYMBOL_LENGTH];
  }

  toString() {
    const result = [];
    let current = this[SYMBOL_HEAD];
    while (current) {
      result.push(current.element);
      current = current.next;
    }
    return result.toString();
  }
}

module.exports = LinkedList;
