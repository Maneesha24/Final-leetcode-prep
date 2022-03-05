const plusOne = require('./index.js');

test('should pass all test conditions', () => {
  expect(plusOne([1,2,3])).toStrictEqual([1,2,4]);
  expect(plusOne([4,3,2,1])).toStrictEqual([4,3,2,2]);
  expect(plusOne([0])).toStrictEqual([1]);
});