const moveZeroes = require('./index.js');

test('should pass the test cases', () => {
    expect(moveZeroes([0,1,0,3,12])).toStrictEqual([1,3,12,0,0]);
    expect(moveZeroes([0])).toStrictEqual([0]);
});