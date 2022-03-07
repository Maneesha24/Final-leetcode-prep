const countWords = require('./index.js');

test('should pass the test cases', () => {
  expect(countWords(["leetcode","is","amazing","as","is"], ["amazing","leetcode","is"])).toBe(2);
  expect(countWords(["b","bb","bbb"], ["a","aa","aaa"])).toBe(0);
  expect(countWords(["a","ab"],["a","a","a","ab"])).toBe(1);
});