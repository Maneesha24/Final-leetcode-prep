const removeDuplicates = require('./index.js');

test('should pass the test cases', () => {
    expect(removeDuplicates("abcd", 2)).toBe("abcd");
    expect(removeDuplicates("deeedbbcccbdaa", 3)).toBe("aa");
    expect(removeDuplicates("pbbcggttciiippooaais", 2)).toBe("ps");
    expect(removeDuplicates("yfttttfbbbbnnnnffbgffffgbbbbgssssgthyyyy", 4)).toBe("ybth");
});