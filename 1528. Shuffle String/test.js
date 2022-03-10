const restoreString = require('./index.js');

test('should pass the test cases', () => {
    expect(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3])).toBe("leetcode");
    expect(restoreString("abc", [0, 1, 2])).toBe("abc");
});