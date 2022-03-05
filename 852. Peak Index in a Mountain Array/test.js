const peakIndexInMountainArray = require('./index.js');

test('should pass the test cases', () => {
    expect(peakIndexInMountainArray([0,1,0])).toBe(1);
    expect(peakIndexInMountainArray([0,2,1,0])).toBe(1);
    expect(peakIndexInMountainArray([0,10,5,2])).toBe(1);
});