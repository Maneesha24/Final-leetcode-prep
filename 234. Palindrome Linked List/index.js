/**
 * @author maneeshavenigalla
 * Given the head of a singly linked list, return true if it is a palindrome.
 * Could you do it in O(n) time and O(1) space
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {

    let slow = head;
    let fast = head;

    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    slow.next = reverse(slow.next);
    slow = slow.next;

    while(slow) {
        if(slow.val != head.val) {
            return false;
        }
        head = head.next;
        slow = slow.next;
    }

    return true;
};

const reverse = (current) => {
    let prev = null;
    let node = current;
    let next = null;

    while(node) {
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
    }

    return prev;
}

module.exports = isPalindrome;