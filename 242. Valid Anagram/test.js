const isAnagram = require('./index.js');

test('should pass the test cases', () => {
  expect(isAnagram("anagram","nagaram")).toBe(true);
  expect(isAnagram("rat","car")).toBe(false);
  expect(isAnagram("a", "ab")).toBe(false);
});