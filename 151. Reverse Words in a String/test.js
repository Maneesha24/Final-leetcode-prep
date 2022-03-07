const reverseWords = require('./index.js');

test('should pass all test conditions', () => {
  expect(reverseWords("the sky is blue")).toBe("blue is sky the");
  expect(reverseWords("  hello world  ")).toBe("world hello");
  expect(reverseWords("a good   example")).toBe("example good a");
});