const sortArrayByParity = require('./index.js');

test('should pass the test cases', () => {
  expect(sortArrayByParity([3,1,2,4])).toStrictEqual([2,4,3,1]);
  expect(sortArrayByParity([0])).toStrictEqual([0]);
});