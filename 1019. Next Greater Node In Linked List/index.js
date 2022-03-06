/**
 * @author maneeshavenigalla
 * You are given the head of a linked list with n nodes. For each node in the list, find the value of the next greater 
 * node. That is, for each node, find the value of the first node that is next to it and has a strictly larger value than
 * it. Return an integer array answer where answer[i] is the value of the next greater node of the ith node (1-indexed). If
 * the ith node does not have a next greater node, set answer[i] = 0.
 * @param {ListNode} head
 * @return {number[]}
 */
 var nextLargerNodes = function(head) {
    let result = [];
    
    let current = head;

    while(current) {
        let greater = current.next || null;
        
        if(greater) {
            while(greater && greater.val <= current.val) {
                greater = greater.next;
            }
        }
        
        result.push(greater && greater.val || 0);
        current = current.next;
    }


    return result;  
};

module.exports = nextLargerNodes;