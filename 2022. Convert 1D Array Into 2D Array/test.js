const construct2DArray = require('./index.js');

test('should pass the test cases', () => {
  expect(construct2DArray([1,2,3,4],2,2)).toStrictEqual([[1,2],[3,4]]);
  expect(construct2DArray([1,2,3],1,3)).toStrictEqual([[1,2,3]]);
  expect(construct2DArray([1,2],1,1)).toStrictEqual([]);
});