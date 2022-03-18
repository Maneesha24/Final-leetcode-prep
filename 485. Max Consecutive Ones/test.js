const findMaxConsecutiveOnes = require('./index.js');

test('should pass the test cases', () => {
    expect(findMaxConsecutiveOnes([1,1,0,1,1,1])).toBe(3);
    expect(findMaxConsecutiveOnes([1,0,1,1,0,1])).toBe(2);
    expect(findMaxConsecutiveOnes([0])).toBe(0);
    expect(findMaxConsecutiveOnes([0,0])).toBe(0);
});