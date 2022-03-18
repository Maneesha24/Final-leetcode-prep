const getKth = require('./index.js');

test('should pass the test cases', () => {
  expect(getKth(lo = 12, hi = 15, k = 2)).toBe(13);
  expect(getKth(lo = 1, hi = 1, k = 1)).toBe(1);
  expect(getKth(lo = 7, hi = 11, k = 4)).toBe(7);
  expect(getKth(lo = 10, hi = 20, k = 5)).toBe(13);
  expect(getKth(lo = 1, hi = 1000, k = 777)).toBe(570);
});