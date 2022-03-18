const numTrees = require('./index.js');

test('should pass the test cases', () => {
    expect(numTrees(3)).toBe(5);
    expect(numTrees(1)).toBe(1);
});