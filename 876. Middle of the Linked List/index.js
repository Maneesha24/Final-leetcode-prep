/**
 * @author maneesha venigalla
 * Given the head of a singly linked list, return the middle
 * node of the linked list. If there are two middle nodes, return the second middle node.
 * @param {Node} head is the head of the linked list 
 * @return {Node} is the middle of the linked list
 */
const middleNode = (head) => {

    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

module.exports = middleNode;