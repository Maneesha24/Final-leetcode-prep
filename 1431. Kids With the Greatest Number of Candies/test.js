const busyStudent = require('./index.js');

test('should pass the test cases', () => {
  expect(busyStudent([2,3,5,1,3], 3)).toStrictEqual([true,true,true,false,true]);
  expect(busyStudent([4,2,1,1,2], 1)).toStrictEqual([true,false,false,false,false]);
  expect(busyStudent([12,1,12], 10)).toStrictEqual([true,false,true]);
});