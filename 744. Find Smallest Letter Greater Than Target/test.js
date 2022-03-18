const nextGreatestLetter = require('./index.js');

test('should pass the test cases', () => {
  expect(nextGreatestLetter(["c","f","j"], "a")).toBe("c");
  expect(nextGreatestLetter(["c","f","j"], "c")).toBe("c");
  expect(nextGreatestLetter(["c","f","j"], "d")).toBe("f");
});