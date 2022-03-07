const sortSentence = require('./index.js');

test('should pass the test cases', () => {
  expect(sortSentence("is2 sentence4 This1 a3")).toBe("This is a sentence");
  expect(sortSentence("Myself2 Me1 I4 and3")).toBe("Me Myself and I");
});