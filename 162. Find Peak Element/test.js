const findPeakElement = require('./index.js');

test('should pass the test cases', () => {
    expect(findPeakElement([1,2,3,1])).toBe(2);
    expect(findPeakElement([1,2,1,3,5,6,4])).toBe(5);
    expect(findPeakElement([1])).toBe(0);
});