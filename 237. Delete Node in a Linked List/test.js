const deleteNode = require('./index.js');
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

test('should pass the test cases', () => {
    let head = new ListNode(4);
    head.next = new ListNode(5);
    head.next.next = new ListNode(1);
    head.next.next.next = new ListNode(9);
    expect(deleteNode(head)).toBeUndefined();
    
    let head2 = new ListNode(4);
    head2.next = new ListNode(5);
    head2.next.next = new ListNode(1);
    head2.next.next.next = new ListNode(9);
    expect(deleteNode(head2)).toBeUndefined();
});