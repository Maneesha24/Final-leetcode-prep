const search = require('./index.js');

test('should pass the test cases', () => {
  expect(search([-1,0,3,5,9,12], 9)).toBe(4);
  expect(search([-1,0,3,5,9,12], 2)).toBe(-1);
  expect(search([5], 5)).toBe(0);
});