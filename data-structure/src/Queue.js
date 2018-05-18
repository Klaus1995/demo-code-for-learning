const SYMBOL_DATA = Symbol('data');

class Queue {
  constructor() {
    this[SYMBOL_DATA] = [];
  }

  enqueue(element) {
    this[SYMBOL_DATA].push(element);
    return true;
  }

  dequeue() {
    return this[SYMBOL_DATA].shift();
  }

  front() {
    return this[SYMBOL_DATA][0];
  }

  clear() {
    this[SYMBOL_DATA] = [];
    return true;
  }

  isEmpty() {
    return this[SYMBOL_DATA].length === 0;
  }

  size() {
    return this[SYMBOL_DATA].length;
  }

  toString() {
    return this[SYMBOL_DATA].toString();
  }
}

module.exports = Queue;
