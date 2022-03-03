const isValid = require('./index.js');

test('should return pass all test conditions', () => {
  expect(isValid(s = "()")).toBe(true);
  expect(isValid(s = "()[]{}")).toBe(true);
  expect(isValid(s = "(]")).toBe(false);
  expect(isValid(s = "([)]")).toBe(false);
  expect(isValid(s = "{[]}")).toBe(true);
});