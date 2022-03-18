const findClosestElements = require('./index.js');

test('should pass the test cases', () => {
  expect(findClosestElements([1,2,3,4,5],4,3)).toStrictEqual([1,2,3,4]);
  expect(findClosestElements([1,2,3,4,5],4,-1)).toStrictEqual([1,2,3,4]);
});