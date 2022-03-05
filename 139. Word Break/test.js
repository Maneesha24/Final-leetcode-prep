const wordBreak = require('./index.js');

test('should pass all test conditions', () => {
  expect(wordBreak(s = "leetcode", wordDict = ["leet","code"])).toBe(true);
  expect(wordBreak(s = "applepenapple", wordDict = ["apple","pen"])).toBe(true);
  expect(wordBreak(s = "catsandog", wordDict = ["cats","dog","sand","and","cat"])).toBe(false);
});