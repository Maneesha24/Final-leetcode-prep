const lengthOfLastWord = require('./index.js');

test('should pass all test conditions', () => {
//   expect(lengthOfLastWord("Hello World")).toBe(5);
  expect(lengthOfLastWord("   fly me   to   the moon  ")).toBe(4);
  expect(lengthOfLastWord("luffy is still joyboy")).toBe(6);
});