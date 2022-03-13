const maxPower = require('./index.js');

test('should pass the test cases', () => {
  expect(maxPower("leetcode")).toBe(2);
  expect(maxPower("abbcccddddeeeeedcba")).toBe(5);
});