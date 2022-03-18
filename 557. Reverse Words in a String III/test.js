const reverseWords = require('./index.js');

test('should pass the test cases', () => {
  expect(reverseWords("Let's take LeetCode contest")).toBe("s'teL ekat edoCteeL tsetnoc");
  expect(reverseWords("God Ding")).toBe("doG gniD");
});