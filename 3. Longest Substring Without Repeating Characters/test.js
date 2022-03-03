const isPalindrome = require('./index.js');

test('should pass all test conditions', () => {
  expect(isPalindrome("abcabcbb")).toBe(3);
  expect(isPalindrome("bbbbb")).toBe(1);
  expect(isPalindrome("pwwkew")).toBe(3);
  expect(isPalindrome("")).toBe(0);
});