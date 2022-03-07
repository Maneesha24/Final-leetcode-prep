const firstUniqChar = require('./index.js');

test('should pass the test cases', () => {
    expect(firstUniqChar("leetcode")).toBe(0);
    expect(firstUniqChar("loveleetcode")).toBe(2);
    expect(firstUniqChar("aabb")).toBe(-1);
});