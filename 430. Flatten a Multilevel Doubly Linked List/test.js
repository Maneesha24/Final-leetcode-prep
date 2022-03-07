const flatten = require('./index.js');
class ListNode {
    constructor(val, prev, next, child) {
        this.val = val;
        this.prev = prev;
        this.next = next;
        this.child = child;
    }
}

test('should pass the test cases', () => {
    let node12 = new ListNode(12);
    let node11 = new ListNode(11, null, node12);
    let node10 = new ListNode(10);
    let node9 = new ListNode(9, null, null, node10);
    let node8 = new ListNode(8, null, node11, node9);
    let node7 = new ListNode(7, null, null, node8);
    let node6 = new ListNode(6);
    let node5 = new ListNode(5, null, null, node6);
    let node4 = new ListNode(4, null, null, node5);
    let node3 = new ListNode(3, null, node4, node7);
    let node2 = new ListNode(2, null, null, node3);
    let node1 = new ListNode(1, null, null, node2);
    expect(flatten(node1)).toBeTruthy();
});