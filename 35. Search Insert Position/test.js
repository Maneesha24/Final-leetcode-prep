const searchInsert = require('./index.js');

test('should pass all test conditions', () => {
  expect(searchInsert([1,3,5,6], 5)).toBe(2);
  expect(searchInsert([1,3,5,6], 2)).toBe(1);
  expect(searchInsert([1,3,5,6], 7)).toBe(4);
});