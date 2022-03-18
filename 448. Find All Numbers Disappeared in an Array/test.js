const findDisappearedNumbers = require('./index.js');

test('should pass the test cases', () => {
  expect(findDisappearedNumbers([4,3,2,7,8,2,3,1])).toStrictEqual([5,6]);
  expect(findDisappearedNumbers([1,1])).toStrictEqual([2]);
});