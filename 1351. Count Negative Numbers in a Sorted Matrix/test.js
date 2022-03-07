const countNegatives = require('./index.js');

test('should pass the test cases', () => {
  expect(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])).toBe(8);
  expect(countNegatives([[3,2],[1,0]])).toBe(0);
  expect(countNegatives([[5,1,0],[-5,-5,-5]])).toBe(3);
});