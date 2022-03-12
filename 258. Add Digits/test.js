const addDigits = require('./index.js');

test('should pass the test cases', () => {
    expect(addDigits(38)).toBe(2);
    expect(addDigits(0)).toBe(0);
});