const sumOfUnique = require('./index.js');

test('should pass the test cases', () => {
  expect(sumOfUnique([1,2,3,2])).toBe(4);
  expect(sumOfUnique([1,1,1,1,1])).toBe(0);
  expect(sumOfUnique([1,2,3,4,5])).toBe(15);
});