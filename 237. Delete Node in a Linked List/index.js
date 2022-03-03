/**
 * @author maneesha venigalla
 * Write a function to delete a node in a singly-linked list. You will not be given access
 * to the head of the list, instead you will be given access to the node to be deleted directly.
 * @param {ListNode} node
 * @return {ListNode}
 */
 const deleteNode = (node) => {
    node.val = node.next.val;
    node.next = node.next.next;
}

module.exports = deleteNode;