/**
 * @author maneesha venigalla
 * Given the head of a linked list and an integer val, remove all the nodes of the linked list
 * that has Node.val == val, and return the new head.
 * @param {Node} head
 * @return {Node}
 */
 var removeElements = function(head, val) {
    while(head && head.val == val) {
        head = head.next;
    }
    
    let current = head;

    while(current) {
        if(current.next && current.next.val == val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head;
};

module.exports = removeElements;