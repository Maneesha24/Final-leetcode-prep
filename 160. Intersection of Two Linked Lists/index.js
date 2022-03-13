/**
 * @author maneesha venigalla
 * Given the heads of two singly linked-lists headA and headB, return the node at 
 * which the two lists intersect. If the two linked lists have no intersection at all, return null.
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 const getIntersectionNode = (headA, headB) => {
    let currentA = headA;
    let currentB = headB;

    while(currentA != currentB) {
        if(!currentA) {
            currentA = headB;
        } else {
            currentA = currentA.next;
        }

        if(!currentB) {
            currentB = headA;
        } else {
            currentB = currentB.next;
        }
    }

    return currentA;

}

module.exports = getIntersectionNode;