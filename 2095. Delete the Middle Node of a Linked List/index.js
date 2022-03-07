/**
 * @author maneesha venigalla
 * You are given the head of a linked list. Delete the middle node, and return
 * the head of the modified linked list.
 * @param {ListNode} head
 * @return {ListNode}
 */
 const deleteMiddle = (head) => {

    if(!head) {
        return [];
    }
    
    if(!head.next) {
        return null;
    }

    let prev = null;
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    prev.next = slow.next;

    return head;
}

module.exports = deleteMiddle;