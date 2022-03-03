/**
 * @author maneesha venigalla
 * Given the head of a singly linked list, reverse the list,
 * and return the reversed list.
 * @param {Node} head
 * @return {Node}
 */
 const reverseList = (head) => {

    let prev = null;
    let node = head;
    let next = null;

    while(node) {
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
    }

    return prev;
}

module.exports = reverseList;