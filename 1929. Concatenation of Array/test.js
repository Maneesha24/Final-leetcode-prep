const getConcatenation = require('./index.js');

test('should pass the test cases', () => {
  expect(getConcatenation([1,2,1])).toStrictEqual([1,2,1,1,2,1]);
  expect(getConcatenation([1,3,2,1])).toStrictEqual([1,3,2,1,1,3,2,1]);
});