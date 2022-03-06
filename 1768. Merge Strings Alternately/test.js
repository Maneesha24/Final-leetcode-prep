const mergeAlternately = require('./index.js');

test('should pass the test cases', () => {
  expect(mergeAlternately("abc", "pqr")).toBe("apbqcr");
  expect(mergeAlternately("ab", "pqrs")).toBe("apbqrs");
  expect(mergeAlternately("abcd", "pq")).toBe("apbqcd");
});