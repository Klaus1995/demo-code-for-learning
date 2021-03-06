const Stack = require('./../src/Stack.js');
const expect = require('chai').expect;

describe('Stack', () => {
  it('#push()', () => {
    const testStack = new Stack();
    testStack.push(0);
    testStack.push(1);
    const element = testStack.peek();
    expect(element).to.be.equal(1);
  });

  it('#pop()', () => {
    const testStack = new Stack();
    testStack.push(0);
    testStack.push(1);
    const element = testStack.pop();
    expect(element).to.be.equal(1);
  });

  it('#peek()', () => {
    const testStack = new Stack();
    testStack.push(0);
    testStack.push(1);
    testStack.push(2);
    const element = testStack.peek();
    expect(element).to.be.equal(2);
  });

  it('#isEmpty()', () => {
    const testStack = new Stack();
    const isEmpty = testStack.isEmpty();
    expect(isEmpty).to.be.ok;
  });

  it('#clear()', () => {
    const testStack = new Stack();
    testStack.push(0);
    testStack.clear();
    const isEmpty = testStack.isEmpty();
    expect(isEmpty).to.be.ok;
  });

  it('#size()', () => {
    const testStack = new Stack();
    testStack.push(0);
    let size = testStack.size();
    expect(size).to.be.equal(1);
    testStack.pop();
    size = testStack.size();
    expect(size).to.be.equal(0);
  });

  it('#toString()', () => {
    const testStack = new Stack();
    testStack.push(0);
    testStack.push(1);
    testStack.push(2);
    const string = testStack.toString();
    expect(string).to.be.equal('0,1,2');
  });
});
