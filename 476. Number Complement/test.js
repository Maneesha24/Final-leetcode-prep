const findComplement = require('./index.js');

test('should pass the test cases', () => {
  expect(findComplement(5)).toBe(2);
  expect(findComplement(1)).toBe(0);
});