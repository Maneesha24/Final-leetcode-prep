const permute = require('./index.js');

test('should pass all test conditions', () => {
  expect(permute([1,2,3])).toStrictEqual([[1,3,2],[1,2,3],[2,3,1],[2,1,3],[3,2,1],[3,1,2]]);
  expect(permute([0,1])).toStrictEqual([[1,0],[0,1]]);
  expect(permute([1])).toStrictEqual([[1]]);
});