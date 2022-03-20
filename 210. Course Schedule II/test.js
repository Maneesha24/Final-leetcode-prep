const findOrder = require('./index.js');

test('should pass the test cases', () => {
    expect(findOrder(2, [[1, 0]])).toStrictEqual([0, 1]);
    expect(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]])).toStrictEqual([0, 1, 2, 3]);
    expect(findOrder(1, [])).toStrictEqual([0]);
});