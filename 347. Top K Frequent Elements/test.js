const topKFrequent = require('./index.js');

test('should pass the test cases', () => {
    expect(topKFrequent([1,1,1,2,2,3], 2)).toStrictEqual([1, 2]);
    expect(topKFrequent([1], 1)).toStrictEqual([1]);
    expect(topKFrequent([-1, -1], 1)).toStrictEqual([-1]);
});