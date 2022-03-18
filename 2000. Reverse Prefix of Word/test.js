const reversePrefix = require('./index.js');

test('should pass the test cases', () => {
  expect(reversePrefix("abcdefd", "d")).toBe("dcbaefd");
  expect(reversePrefix("xyxzxe", "z")).toBe("zxyxxe");
  expect(reversePrefix("abcd", "z")).toBe("abcd");
});