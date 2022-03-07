/**
 * @author maneeshavenigalla
 * Given the head of the first level of the list, flatten the list so that all the nodes appear in a 
 * single-level, doubly linked list. Let curr be a node with a child list. The nodes in the child list
 * should appear after curr and before curr.next in the flattened list. Return the head of the flattened 
 * list. The nodes in the list must have all of their child pointers set to null.
 * @param {Node} head
 * @return {Node}
 */
class Node {
    constructor(val, prev, next, child) {
        this.val = val;
        this.prev = prev;
        this.next = next;
        this.child = child;
    }
}
var flatten = function (head) {

    if(!head) {
        return head;
    }

    let newHead = new Node(0, null, head, null);
    let current = newHead;
    let prev = null;

    let stack = [head];

    while(stack.length) {
        current = stack.pop();

        if(prev) {
            current.prev = prev;
            prev.next = current;
        }

        if(current.next) {
            stack.push(current.next);
        }

        if(current.child) {
            stack.push(current.child);
            current.child = null;
        }

        prev = current;
    }

    return newHead.next;
};

module.exports = flatten;