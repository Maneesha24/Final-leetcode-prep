const getIntersectionNode = require('./index.js');
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

test('should pass the test cases', () => {
    let head1 = new ListNode(4);
    head1.next = new ListNode(1);
    head1.next.next = new ListNode(8);
    head1.next.next.next = new ListNode(4);
    head1.next.next.next.next = new ListNode(5);

    let head2 = new ListNode(5);
    head2.next = new ListNode(6);
    head2.next.next = new ListNode(1);
    head2.next.next.next = new ListNode(8);
    head2.next.next.next.next = new ListNode(4);
    head2.next.next.next.next.next = new ListNode(5);
    expect(getIntersectionNode(head1, head2)).toEqual(null);
});