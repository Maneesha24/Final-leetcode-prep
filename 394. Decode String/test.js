const decodeString = require('./index.js');

test('should pass the test cases', () => {
  expect(decodeString("3[a]2[bc]")).toBe("aaabcbc");
  expect(decodeString("3[a2[c]]")).toBe("accaccacc");
  expect(decodeString("2[abc]3[cd]ef")).toBe("abcabccdcdcdef");
});