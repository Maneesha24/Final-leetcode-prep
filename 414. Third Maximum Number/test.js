const thirdMax = require('./index.js');

test('should pass the test cases', () => {
  expect(thirdMax([3,2,1])).toBe(1);
  expect(thirdMax([1,2])).toBe(2);
  expect(thirdMax([2,2,3,1])).toBe(1);
  expect(thirdMax([1,1,2])).toBe(2);
});