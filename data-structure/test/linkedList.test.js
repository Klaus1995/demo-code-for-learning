const LinkedList = require('./../LinkedList.js');
const expect = require('chai').expect;

describe('LinkedList', () => {
  it('#append()', () => {
    const testLinkedList = new LinkedList();
    const result1 = testLinkedList.append(0);
    const result2 = testLinkedList.append(1);
    const length = testLinkedList.size();
    const string = testLinkedList.toString();
    expect(result1).to.be.ok;
    expect(result2).to.be.ok;
    expect(length).to.be.equal(2);
    expect(string).to.be.equal('0,1');
  });

  it('#insert()', () => {
    const testLinkedList = new LinkedList();
    testLinkedList.append(1);
    testLinkedList.append(3);
    testLinkedList.append(4);
    const result1 = testLinkedList.insert(0, 0);
    const result2 = testLinkedList.insert(2, 2);
    const result3 = testLinkedList.insert(5, 5);
    const result4 = testLinkedList.insert(-1, NaN);
    const result5 = testLinkedList.insert(7, NaN);
    const length = testLinkedList.size();
    const string = testLinkedList.toString();
    expect(result1).to.be.ok;
    expect(result2).to.be.ok;
    expect(result3).to.be.ok;
    expect(result4).to.be.not.ok;
    expect(result5).to.be.not.ok;
    expect(length).to.be.equal(6);
    expect(string).to.be.equal('0,1,2,3,4,5');
  });

  it('#remove()', () => {
    const testLinkedList = new LinkedList();
    const result1 = testLinkedList.remove(0);
    testLinkedList.append(0);
    testLinkedList.append(1);
    testLinkedList.append(2);
    testLinkedList.append(3);
    testLinkedList.append(4);
    const result2 = testLinkedList.remove(0);
    const result3 = testLinkedList.remove(2);
    const result4 = testLinkedList.remove(4);
    const result5 = testLinkedList.remove(5);
    const length = testLinkedList.size();
    const string = testLinkedList.toString();
    expect(result2).to.be.ok;
    expect(result3).to.be.ok;
    expect(result4).to.be.ok;
    expect(result1).to.be.not.ok;
    expect(result5).to.be.not.ok;
    expect(length).to.be.equal(2);
    expect(string).to.be.equal('1,3');
  });

  it('#indexOf()', () => {
    const testLinkedList = new LinkedList();
    const result1 = testLinkedList.indexOf(0);
    testLinkedList.append(0);
    testLinkedList.append(1);
    testLinkedList.append(2);
    const result2 = testLinkedList.indexOf(0);
    const result3 = testLinkedList.indexOf(3);
    const result4 = testLinkedList.indexOf(2);
    expect(result1).to.be.equal(-1);
    expect(result2).to.be.equal(0);
    expect(result3).to.be.equal(-1);
    expect(result4).to.be.equal(2);
  });

  it('#removeAt', () => {
    const testLinkedList = new LinkedList();
    const result1 = testLinkedList.removeAt(0);
    testLinkedList.append(0);
    testLinkedList.append(1);
    testLinkedList.append(2);
    testLinkedList.append(3);
    testLinkedList.append(4);
    const result2 = testLinkedList.removeAt(0);
    const result3 = testLinkedList.removeAt(1);
    const result4 = testLinkedList.removeAt(3);
    const length = testLinkedList.size();
    const string = testLinkedList.toString();
    expect(result1).to.be.not.ok;
    expect(result2).to.be.ok;
    expect(result3).to.be.ok;
    expect(result4).to.be.not.ok;
    expect(length).to.be.equal(3);
    expect(string).to.be.equal('1,3,4');
  });

  it('#isEmpty()', () => {
    const testLinkedList = new LinkedList();
    const result1 = testLinkedList.isEmpty();
    testLinkedList.append(0);
    const result2 = testLinkedList.isEmpty();
    expect(result1).to.be.ok;
    expect(result2).to.be.not.ok;
  });

  it('#size()', () => {
    const testLinkedList = new LinkedList();
    const result1 = testLinkedList.size();
    testLinkedList.append(0);
    const result2 = testLinkedList.size();
    expect(result1).to.be.equal(0);
    expect(result2).to.be.equal(1);
  });

  it('#toString()', () => {
    const testLinkedList = new LinkedList();
    testLinkedList.append(0);
    testLinkedList.append(1);
    testLinkedList.append(2);
    const string = testLinkedList.toString();
    expect(string).to.be.equal('0,1,2');
  });
});
