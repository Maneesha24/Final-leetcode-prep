const checkIfPangram = require('./index.js');

test('should pass the test cases', () => {
  expect(checkIfPangram("thequickbrownfoxjumpsoverthelazydog")).toBe(true);
  expect(checkIfPangram("leetcode")).toBe(false);
});