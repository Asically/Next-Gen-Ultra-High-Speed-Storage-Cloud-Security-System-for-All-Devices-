const sum = require('../src/sum');

// example.test.js

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds -1 + -2 to equal -3', () => {
  expect(sum(-1, -2)).toBe(-3);
});