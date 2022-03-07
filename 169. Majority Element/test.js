const majorityElement = require('./index.js');

test('should pass the test cases', () => {
    expect(majorityElement([3,2,3])).toBe(3);
    expect(majorityElement([2,2,1,1,1,2,2])).toBe(2);
});