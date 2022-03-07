const judgeCircle = require('./index.js');

test('should pass the test cases', () => {
  expect(judgeCircle("UD")).toBe(true);
  expect(judgeCircle("LL")).toBe(false);
  expect(judgeCircle("RLUURDDDLU")).toBe(true);
});