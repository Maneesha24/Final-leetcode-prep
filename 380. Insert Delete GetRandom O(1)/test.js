const RandomizedSet = require('./index');

test('should pass the test cases', () => {
    let set1 = new RandomizedSet();
    expect(set1.insert(1)).toBe(true);
    expect(set1.remove(2)).toBe(false);
    expect(set1.insert(2)).toBe(true);
    expect(set1.remove(1)).toBe(true);
    expect(set1.insert(2)).toBe(false);
    expect(set1.getRandom()).toBe(2);
});