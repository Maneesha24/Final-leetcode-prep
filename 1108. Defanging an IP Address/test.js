const defangIPaddr = require('./index.js');

test('should pass the test cases', () => {
  expect(defangIPaddr("1.1.1.1")).toBe("1[.]1[.]1[.]1");
  expect(defangIPaddr("255.100.50.0")).toBe("255[.]100[.]50[.]0");
});