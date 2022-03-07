const strStr = require('./index.js');

test('should pass all test conditions', () => {
  expect(strStr("hello", "ll")).toBe(2);
  expect(strStr("aaaaa", "bba")).toBe(-1);
  expect(strStr("", "")).toBe(0);
  expect(strStr("a", "a")).toBe(0);
});