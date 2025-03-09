const CallStack = require('../src/callStack');

describe('CallStack', () => {
  let stack;

  beforeEach(() => {
    stack = new CallStack();
  });

  test('should push and pop items correctly', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });

  test('should peek the top item without removing it', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    expect(stack.size()).toBe(2);
  });

  test('should return the correct size', () => {
    expect(stack.size()).toBe(0);
    stack.push(1);
    expect(stack.size()).toBe(1);
  });

  test('should throw an error when popping from an empty stack', () => {
    expect(() => stack.pop()).toThrow("Stack is empty");
  });

  test('should throw an error when peeking an empty stack', () => {
    expect(() => stack.peek()).toThrow("Stack is empty");
  });
});
