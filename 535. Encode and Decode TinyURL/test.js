const {encode, decode} = require('./index.js');

test('should pass the test cases', () => {
    expect(decode(encode("https://leetcode.com/problems/design-tinyurl"))).toBe("https://leetcode.com/problems/design-tinyurl");
});