const generateMatrix = require('./index.js');

test('should pass all test conditions', () => {
  expect(generateMatrix(3)).toStrictEqual([[1,2,3],[8,9,4],[7,6,5]]);
  expect(generateMatrix(1)).toStrictEqual([[1]]);
});