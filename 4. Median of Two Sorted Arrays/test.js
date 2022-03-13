const findMedianSortedArrays = require('./index.js');

test('should pass the test cases', () => {
  expect(findMedianSortedArrays([1,3],[2])).toBe(2);
  expect(findMedianSortedArrays([1,2],[3,4])).toBe(2.5);
});