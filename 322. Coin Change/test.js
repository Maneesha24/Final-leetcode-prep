const coinChange = require('./index.js');

test('should pass the test cases', () => {
    expect(coinChange([1, 2, 5], 11)).toBe(3);
    expect(coinChange([2], 3)).toBe(-1);
    expect(coinChange([1], 0)).toBe(0);
    expect(coinChange([2,5,10,1], 27)).toBe(4);
});