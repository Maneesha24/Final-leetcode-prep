/**
 * @author maneeshavenigalla
 * You are given two non-empty linked lists representing two non-negative integers. The
 * digits are stored in reverse order, and each of their nodes contains a single digit. Add 
 * the two numbers and return the sum as a linked list. You may assume the two numbers do not
 * contain any leading zero, except the number 0 itself.
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const addTwoNumbers = (l1, l2) => {

    let stack1 = [];
    let stack2 = [];

    let resultNode = null;

    while(l1) {
        stack1.push(l1.val);
        l1 = l1.next;
    }

    while(l2) {
        stack2.push(l2.val);
        l2 = l2.next;
    }

    let sum = 0;
    let carry = 0;

    while (stack1.length || stack2.length || sum > 0) {

        if (stack1.length) {
            sum += stack1.pop();
        }

        if (stack2.length) {
            sum += stack2.pop();
        }

        carry = Math.floor(sum / 10);
        sum = sum % 10;
        
        let newNode = new ListNode(sum);

        if(!resultNode) {
            resultNode = newNode
        } else {
            newNode.next = resultNode;
            resultNode = newNode;
        }

        sum = carry;
        carry = 0;
    }

    return resultNode;
};

module.exports = addTwoNumbers;