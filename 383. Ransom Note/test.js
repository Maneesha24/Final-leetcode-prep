const canConstruct = require('./index.js');

test('should pass the test cases', () => {
    expect(canConstruct("a", "b")).toBe(false);
    expect(canConstruct("aa", "ab")).toBe(false);
    expect(canConstruct("aa", "aab")).toBe(true);
});