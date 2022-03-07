const countBits = require('./index.js');

test('should pass the test cases', () => {
  expect(countBits(2)).toStrictEqual([0,1,1]);
  expect(countBits(5)).toStrictEqual([0,1,1,2,1,2]);
});