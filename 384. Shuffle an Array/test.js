const Solution = require('./index');

test('should pass the test cases', () => {
    let sol1 = new Solution([1,2,3,4]);
    expect(sol1.reset()).toStrictEqual([1,2,3,4]);
    let sol2 = new Solution([1,2,3,4,5,6,7,8,9,10,11]);
    sol2.reset();
    expect(sol2.reset()).toStrictEqual([1,2,3,4,5,6,7,8,9,10,11]);
});