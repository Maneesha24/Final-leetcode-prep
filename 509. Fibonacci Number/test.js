const fib = require('./index.js');

test('should pass the test cases', () => {
    expect(fib(2)).toBe(1);
    expect(fib(3)).toBe(2);
    expect(fib(4)).toBe(3);
});