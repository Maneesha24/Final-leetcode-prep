const isPalindrome = require('./index.js');

test('should pass the test cases', () => {
  expect(isPalindrome(121)).toBe(true);
  expect(isPalindrome(-121)).toBe(false);
  expect(isPalindrome(10)).toBe(false);
  expect(isPalindrome(-101)).toBe(false);
});