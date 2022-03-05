const toLowerCase = require('./index.js');

test('should pass the test cases', () => {
  expect(toLowerCase("Hello")).toBe("hello");
  expect(toLowerCase("here")).toBe("here");
  expect(toLowerCase("LOVELY")).toBe("lovely");
});