class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * @author maneeshavenigalla
 * You are given the heads of two sorted linked lists list1 and list2. Return
 * the head of the merged linked list.
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {

    if(!lists.length) {
        return null;
    }

    let root = lists[0];

    for(let i = 1; i < lists.length; i++) {
        root = merge(root, lists[i]);
    }

    return root;
}

const merge = (list1, list2) => {
    let resultNode = new ListNode();
    let current = resultNode;

    while(list1 && list2) {
        if(list1.val >= list2.val) {
            current.next = new ListNode(list2.val);
            list2 = list2.next;
        } else {
            current.next = new ListNode(list1.val);
            list1 = list1.next;         
        }

        current = current.next;
    }

    if(list1) {
        current.next = list1;
    }

    if(list2) {
        current.next = list2;
    }

    return resultNode.next;
}

module.exports = mergeKLists;