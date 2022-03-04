const topKFrequent = require('./index.js');

test('should pass the test cases', () => {
  expect(topKFrequent(["i","love","leetcode","i","love","coding"], 2)).toEqual(["i","love"]);
  expect(topKFrequent(["the","day","is","sunny","the","the","the","sunny","is","is"], 4)).toEqual(["the","is","sunny","day"]);
  expect(topKFrequent(["i","love","leetcode","i","love","coding"], 3)).toEqual(["i","love","coding"]);
});