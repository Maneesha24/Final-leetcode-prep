const hammingWeight = require('./index.js');

test('should pass all test conditions', () => {
  expect(hammingWeight("00000000000000000000000000001011")).toBe(3);
  expect(hammingWeight("00000000000000000000000010000000")).toBe(1);
  expect(hammingWeight("11111111111111111111111111111101")).toBe(31);
});