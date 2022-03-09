const flipAndInvertImage = require('./index.js');

test('should pass the test cases', () => {
    expect(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]])).toStrictEqual([[1, 0, 0], [0, 1, 0], [1, 1, 1]]);
    expect(flipAndInvertImage([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]])).toStrictEqual([[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 1, 0]]);
});