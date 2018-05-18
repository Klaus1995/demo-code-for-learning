const SYMBOL_DATA = Symbol('data');

class Element {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class Priority {
  constructor() {
    this[SYMBOL_DATA] = [];
  }

  enqueue(element, priority) {
    const queueElement = new Element(element, priority);
    const index = this[SYMBOL_DATA].findIndex(item => item.priority < priority);
    if (index !== -1) {
      this[SYMBOL_DATA].splice(index, 0, queueElement);
    } else {
      this[SYMBOL_DATA].push(queueElement);
    }
    return true;
  }

  dequeue() {
    const element = this[SYMBOL_DATA].shift();
    return element && element.element;
  }

  front() {
    return this[SYMBOL_DATA][0] && this[SYMBOL_DATA][0].element;
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
    return this[SYMBOL_DATA].map(item => item.element).toString();
  }
}

module.exports = Priority;
