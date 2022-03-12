const largestNumber = require('./index.js');

test('should pass all test conditions', () => {
  expect(largestNumber([10,2])).toBe("210");
  expect(largestNumber([3,30,34,5,9])).toBe("9534330");
});