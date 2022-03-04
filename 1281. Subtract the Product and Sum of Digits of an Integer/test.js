const subtractProductAndSum = require('./index.js');

test('should return the difference between the product and sum of number', () => {
  expect(subtractProductAndSum(234)).toBe(15);
  expect(subtractProductAndSum(4421)).toBe(21);
});