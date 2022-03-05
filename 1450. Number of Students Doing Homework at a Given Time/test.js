const busyStudent = require('./index.js');

test('should pass the test cases', () => {
  expect(busyStudent([1,2,3],[3,2,7], 4)).toBe(1);
  expect(busyStudent([4],[4],4)).toBe(1);
});