const backspaceCompare = require('./index.js');

test('should pass the test cases', () => {
    expect(backspaceCompare("ab#c", "ad#c")).toBe(true);
    expect(backspaceCompare("ab##", "c#d#")).toBe(true);
    expect(backspaceCompare("a#c", "b")).toBe(false);
});