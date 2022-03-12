const singleNumber = require('./index.js');

test('should pass all test conditions', () => {
  expect(singleNumber([2,2,1])).toBe(1);
  expect(singleNumber([4,1,2,1,2])).toBe(4);
  expect(singleNumber([1])).toBe(1);
});