const containsNearbyDuplicate = require('./index.js');

test('should pass the test cases', () => {
  expect(containsNearbyDuplicate([1,2,3,1], 3)).toBe(true);
  expect(containsNearbyDuplicate([1,0,1,1], 1)).toBe(true);
  expect(containsNearbyDuplicate([1,2,3,1,2,3], 2)).toBe(false);
});