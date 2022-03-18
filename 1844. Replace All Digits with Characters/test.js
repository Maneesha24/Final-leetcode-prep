const replaceDigits = require('./index.js');

test('should pass the test cases', () => {
  expect(replaceDigits("a1c1e1")).toBe("abcdef");
  expect(replaceDigits("a1b2c3d4e")).toBe("abbdcfdhe");
});