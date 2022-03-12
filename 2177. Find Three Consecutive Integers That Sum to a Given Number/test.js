const sumOfThree = require('./index.js');

test('should pass the test cases', () => {
  expect(sumOfThree(33)).toStrictEqual([10,11,12]);
  expect(sumOfThree(4)).toStrictEqual([]);
});