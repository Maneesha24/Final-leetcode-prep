const frequencySort = require('./index.js');

test('should pass the test cases', () => {
  expect(frequencySort([1,1,2,2,2,3])).toStrictEqual([3,1,1,2,2,2]);
  expect(frequencySort([2,3,1,3,2])).toStrictEqual([1,3,3,2,2]);
  expect(frequencySort([-1,1,-6,4,5,-6,1,4,1])).toStrictEqual([5,-1,4,4,-6,-6,1,1,1]);
  expect(frequencySort([8,-8,2,-8,-5,-3])).toStrictEqual([8,2,-3,-5,-8,-8]);
});