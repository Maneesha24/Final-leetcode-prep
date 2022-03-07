const reverseString = require('./index.js');

test('should pass the test cases', () => {
  expect(reverseString(["h","e","l","l","o"])).toStrictEqual(["o","l","l","e","h"]);
  expect(reverseString(["H","a","n","n","a","h"])).toStrictEqual(["h","a","n","n","a","H"]);
});