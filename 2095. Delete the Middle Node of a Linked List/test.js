const deleteMiddle = require('./index.js');
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

test('should pass the test cases', () => {
  let head1 = new ListNode(1);
  head1.next = new ListNode(3);
  head1.next.next = new ListNode(4);
  head1.next.next.next = new ListNode(7);
  head1.next.next.next.next = new ListNode(1);
  head1.next.next.next.next.next = new ListNode(2);
  head1.next.next.next.next.next.next = new ListNode(6);
  expect(deleteMiddle(head1)).toEqual({"next": {"next": {"next": {"next": {"next": {"next": null, "val": 6}, "val": 2}, "val": 1}, "val": 4}, "val": 3}, "val": 1});

  let head2 = new ListNode(1);
  head2.next = new ListNode(2);
  head2.next.next = new ListNode(3);
  head2.next.next.next = new ListNode(4);
  expect(deleteMiddle(head2)).toEqual({"next": {"next": {"next": null, "val": 4}, "val": 2}, "val": 1});

  let head3 = new ListNode(2);
  head3.next = new ListNode(1);
  expect(deleteMiddle(head3)).toEqual({"next": null, "val": 2});
});