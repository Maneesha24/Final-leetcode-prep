const areOccurrencesEqual = require('./index.js');

test('should pass the test cases', () => {
  expect(areOccurrencesEqual("abacbc")).toBe(true);
  expect(areOccurrencesEqual("aaabb")).toBe(false);
});