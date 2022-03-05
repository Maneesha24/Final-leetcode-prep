const MyQueue = require('./index');

test('should pass the test cases', () => {
    let queue1 = new MyQueue();
    queue1.push(1);
    expect(queue1.empty()).toBe(false);

    let queue2 = new MyQueue();
    queue2.push(123);
    queue2.push(1234);
    expect(queue2.peek()).toBe(123);
    expect(queue2.pop()).toBe(123);
});