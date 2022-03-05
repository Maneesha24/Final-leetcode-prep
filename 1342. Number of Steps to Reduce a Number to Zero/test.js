const numberOfSteps = require('./index.js');

test('should pass the test cases', () => {
  expect(numberOfSteps(14)).toStrictEqual(6);
  expect(numberOfSteps(8)).toStrictEqual(4);
  expect(numberOfSteps(123)).toStrictEqual(12);
});