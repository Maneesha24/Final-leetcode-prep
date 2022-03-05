const invalidTransactions = require('./index.js');

test('should pass the test cases', () => {
    expect(invalidTransactions(["alice,20,800,mtv", "alice,50,100,beijing"])).toStrictEqual(["alice,50,100,beijing","alice,20,800,mtv"]);
    expect(invalidTransactions(["alice,20,800,mtv", "alice,50,1200,mtv"])).toStrictEqual(["alice,50,1200,mtv"]);
    expect(invalidTransactions(["alice,20,800,mtv", "bob,50,1200,mtv"])).toStrictEqual(["bob,50,1200,mtv"]);
});