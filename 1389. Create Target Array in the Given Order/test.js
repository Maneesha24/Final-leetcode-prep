const createTargetArray = require('./index.js');

test('should pass the test cases', () => {
  expect(createTargetArray([0,1,2,3,4], [0,1,2,2,1])).toStrictEqual([0,4,1,3,2]);
  expect(createTargetArray([1,2,3,4,0], [0,1,2,3,0])).toStrictEqual([0,1,2,3,4]);
  expect(createTargetArray([1],[0])).toStrictEqual([1]);
});