const kthSmallest = require('./index.js');

test('should pass the test cases', () => {
    expect(kthSmallest([[1,5,9],[10,11,13],[12,13,15]], 8)).toBe(13);
    expect(kthSmallest([[-5]], 1)).toBe(-5);
});