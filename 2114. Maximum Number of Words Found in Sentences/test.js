const mostWordsFound = require('./index.js');

test('should pass the test cases', () => {
  expect(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"])).toBe(6);
  expect(mostWordsFound(["please wait", "continue to fight", "continue to win"])).toBe(3);
});