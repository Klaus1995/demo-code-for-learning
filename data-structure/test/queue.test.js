const Queue = require('./../src/Queue.js');
const expect = require('chai').expect;

describe('Queue', () => {
  it('#enqueue()', () => {
    const testQueue = new Queue();
    testQueue.enqueue(0);
    testQueue.enqueue(1);
    const element = testQueue.front();
    expect(element).to.be.equal(0);
  });

  it('#dequeue()', () => {
    const testQueue = new Queue();
    testQueue.enqueue(0);
    testQueue.enqueue(1);
    const element = testQueue.dequeue();
    expect(element).to.be.equal(0);
  });

  it('#front()', () => {
    const testQueue = new Queue();
    testQueue.enqueue(0);
    testQueue.enqueue(1);
    testQueue.enqueue(2);
    const element = testQueue.front();
    expect(element).to.be.equal(0);
  });

  it('#isEmpty()', () => {
    const testQueue = new Queue();
    const isEmpty = testQueue.isEmpty();
    expect(isEmpty).to.be.ok;
  });

  it('#clear()', () => {
    const testQueue = new Queue();
    testQueue.enqueue(0);
    testQueue.clear();
    const isEmpty = testQueue.isEmpty();
    expect(isEmpty).to.be.ok;
  });

  it('#size()', () => {
    const testQueue = new Queue();
    testQueue.enqueue(0);
    let size = testQueue.size();
    expect(size).to.be.equal(1);
    testQueue.dequeue();
    size = testQueue.size();
    expect(size).to.be.equal(0);
  });

  it('#toString()', () => {
    const testQueue = new Queue();
    testQueue.enqueue(0);
    testQueue.enqueue(1);
    testQueue.enqueue(2);
    const string = testQueue.toString();
    expect(string).to.be.equal('0,1,2');
  });
});
