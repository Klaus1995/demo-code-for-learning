const SYMBOL_DATA = Symbol('data');

class Stack {
  constructor() {
    this[SYMBOL_DATA] = new Array();
  }

  push(element) {
    this[SYMBOL_DATA].push(element);
    return true;
  }

  pop() {
    return this[SYMBOL_DATA].pop();
  }

  peek() {
    const length = this[SYMBOL_DATA].length;
    return this[SYMBOL_DATA][length - 1];
  }

  isEmpty() {
    return this[SYMBOL_DATA].length === 0;
  }

  clear() {
    this[SYMBOL_DATA] = new Array();
    return true;
  }

  size() {
    return this[SYMBOL_DATA].length;
  }

  toString() {
    return this[SYMBOL_DATA].toString();
  }
}

module.exports = Stack;