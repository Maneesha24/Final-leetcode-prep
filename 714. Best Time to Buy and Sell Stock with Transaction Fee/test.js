const maxProfit = require('./index.js');

test('should pass the test cases', () => {
    expect(maxProfit([1,3,2,8,4,9], 2)).toBe(8);
    expect(maxProfit([1,3,7,5,10,3], 3)).toBe(6);
});