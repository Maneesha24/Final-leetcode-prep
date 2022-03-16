const sortByBits = require('./index.js');

test('should pass the test cases', () => {
  expect(sortByBits([0,1,2,3,4,5,6,7,8])).toStrictEqual([0,1,2,4,8,3,5,6,7]);
  expect(sortByBits([1024,512,256,128,64,32,16,8,4,2,1])).toStrictEqual([1,2,4,8,16,32,64,128,256,512,1024]);
  expect(sortByBits([10000,10000])).toStrictEqual([10000,10000]);
});