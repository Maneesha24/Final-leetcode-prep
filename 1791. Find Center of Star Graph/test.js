const findCenter = require('./index.js');

test('should pass the test cases', () => {
  expect(findCenter([[1,2],[2,3],[4,2]])).toBe(2);
  expect(findCenter([[1,2],[5,1],[1,3],[1,4]])).toBe(1);
});