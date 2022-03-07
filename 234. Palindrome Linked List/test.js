const isPalindrome = require('./index.js');
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

test('should pass the test cases', () => {
    let head1 = new ListNode(1);
    head1.next = new ListNode(2);
    head1.next.next = new ListNode(2);
    head1.next.next.next = new ListNode(1);
    expect(isPalindrome(head1)).toBe(true);
    
    let head2 = new ListNode(1);
    head2.next = new ListNode(2);
    expect(isPalindrome(head2)).toBe(false);
});