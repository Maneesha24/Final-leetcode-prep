const halvesAreAlike = require('./index.js');

test('should pass the test cases', () => {
  expect(halvesAreAlike("book")).toBe(true);
  expect(halvesAreAlike("textbook")).toBe(false);
});