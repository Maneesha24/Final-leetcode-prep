const interpret = require('./index.js');

test('should pass the test cases', () => {
  expect(interpret("G()(al)")).toBe("Goal");
  expect(interpret("G()()()()(al)")).toBe("Gooooal");
  expect(interpret("(al)G(al)()()G")).toBe("alGalooG");
});