const PriorityQueue = require('./../src/PriorityQueue.js');
const expect = require('chai').expect;

describe('PriorityQueue', () => {
  it('#enqueue()', () => {
    const testQueue = new PriorityQueue();
    testQueue.enqueue(0, 1);
    testQueue.enqueue(1, 2);
    testQueue.enqueue(2, 2);
    const element = testQueue.front();
    expect(element).to.be.equal(1);
  });

  it('#dequeue()', () => {
    const testQueue = new PriorityQueue();
    testQueue.enqueue(0, 1);
    testQueue.enqueue(1, 2);
    testQueue.enqueue(2, 2);
    const element = testQueue.dequeue();
    expect(element).to.be.equal(1);
  });

  it('#front()', () => {
    const testQueue = new PriorityQueue();
    testQueue.enqueue(0, 1);
    testQueue.enqueue(1, 2);
    testQueue.enqueue(2, 3);
    const element = testQueue.front();
    expect(element).to.be.equal(2);
  });

  it('#isEmpty()', () => {
    const testQueue = new PriorityQueue();
    const isEmpty = testQueue.isEmpty();
    expect(isEmpty).to.be.ok;
  });

  it('#clear()', () => {
    const testQueue = new PriorityQueue();
    testQueue.enqueue(0, 1);
    testQueue.clear();
    const isEmpty = testQueue.isEmpty();
    expect(isEmpty).to.be.ok;
  });

  it('#size()', () => {
    const testQueue = new PriorityQueue();
    testQueue.enqueue(0, 1);
    let size = testQueue.size();
    expect(size).to.be.equal(1);
    testQueue.dequeue();
    size = testQueue.size();
    expect(size).to.be.equal(0);
  });

  it('#toString()', () => {
    const testQueue = new PriorityQueue();
    testQueue.enqueue(0, 2);
    testQueue.enqueue(1, 1);
    testQueue.enqueue(2, 3);
    const string = testQueue.toString();
    expect(string).to.be.equal('2,0,1');
  });
});
