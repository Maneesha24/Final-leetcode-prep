const removeDuplicates = require('./index.js');

test('should pass the test cases', () => {
    expect(removeDuplicates("abbaca")).toBe("ca");
    expect(removeDuplicates("azxxzy")).toBe("ay");
});