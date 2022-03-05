const arrayStringsAreEqual = require('./index.js');

test('should pass the test cases', () => {
  expect(arrayStringsAreEqual(["ab", "c"], ["a", "bc"])).toBe(true);
  expect(arrayStringsAreEqual(["a", "cb"], ["ab", "c"])).toBe(false);
  expect(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"])).toBe(true);
});