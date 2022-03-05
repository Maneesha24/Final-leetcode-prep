/**
 * @author maneeshavenigalla
 * Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes,
 * where each new node has its value set to the value of its corresponding original node. Both the
 * next and random pointer of the new nodes should point to new nodes in the copied list such that
 * the pointers in the original list and copied list represent the same list state. None of the pointers
 * in the new list should point to nodes in the original list. Return the head of the copied linked list.
 * @param {Node} head
 * @return {Node}
 */
 class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var copyRandomList = function (head) {

    let pointerMap = new Map();

    let current = head;

    while(current) {
        let newListNode = new ListNode(current.val);
        pointerMap.set(current, newListNode);
        current = current.next;
    }

    current = head;

    while(current) {
        let copyNode = pointerMap.get(current);
        copyNode.next = pointerMap.get(current.next) || null;
        copyNode.random = pointerMap.get(current.random) || null;

        current = current.next;
    }


    return pointerMap.get(head);

};

module.exports = copyRandomList;