const middleNode = require('./index.js');
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

test('should pass the test cases', () => {
    let head1 = new ListNode(2);
    head1.next = new ListNode(1);
    head1.next.next = new ListNode(5);
    expect(middleNode(head1)).toStrictEqual([5,5,0]);

    let head2 = new ListNode(2);
    head2.next = new ListNode(7);
    head2.next.next = new ListNode(4);
    head2.next.next.next = new ListNode(3);
    head2.next.next.next.next = new ListNode(5);
    expect(middleNode(head2)).toStrictEqual([7,0,5,5,0]);

    let head3 = new ListNode(3);
    head3.next = new ListNode(3);
    expect(middleNode(head3)).toStrictEqual([0,0]);
});