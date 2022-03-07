const numJewelsInStones = require('./index.js');

test('should pass the test cases', () => {
  expect(numJewelsInStones("aA", "aAAbbbb")).toBe(3);
  expect(numJewelsInStones("z", "ZZ")).toBe(0);
});