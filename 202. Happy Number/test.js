const isHappy = require('./index.js');

test('should pass the test cases', () => {
  expect(isHappy(19)).toBe(true);
  expect(isHappy(2)).toBe(false);
});