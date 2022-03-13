const letterCasePermutation = require('./index.js');

test('should pass the test cases', () => {
  expect(letterCasePermutation("a1b2")).toStrictEqual(["a1b2","a1B2","A1b2","A1B2"]);
  expect(letterCasePermutation("3z4")).toStrictEqual(["3z4","3Z4"]);
});