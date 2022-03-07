const shuffle = require('./index.js');

test('should pass the test cases', () => {
  expect(shuffle([2,5,1,3,4,7], 3)).toStrictEqual([2,3,5,4,1,7]);
  expect(shuffle([1,2,3,4,4,3,2,1], 4)).toStrictEqual([1,4,2,3,3,2,4,1]);
  expect(shuffle([1,1,2,2], 2)).toStrictEqual([1,2,1,2]);
});