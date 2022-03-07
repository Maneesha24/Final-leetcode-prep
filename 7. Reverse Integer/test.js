const reverse = require('./index.js');

test('should pass the test cases', () => {
  expect(reverse(123)).toBe(321);
  expect(reverse(-123)).toBe(-321);
  expect(reverse(120)).toBe(21);
});