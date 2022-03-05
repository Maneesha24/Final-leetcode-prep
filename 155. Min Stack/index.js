/**
 * @author maneeshavenigalla
 * Design a stack that supports push, pop, top, and retrieving the minimum element
 * in constant time. Implement the MinStack class:
 */
 class MinStack {
    constructor() {
        this.stack = [];
    }

    /** 
     * void push(int val) pushes the element val onto the stack.
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push({
            val: val,
            min: !this.stack.length ? val : Math.min(val, this.getMin())
        })
    };

    /** 
     * void pop() removes the element on the top of the stack.
     * @return {void}
     */
    pop() {
        this.stack.pop();
    };

    /** 
     * int top() gets the top element of the stack.
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1].val;
    };

    /** 
     * int getMin() retrieves the minimum element in the stack.
     * @return {number}
     */
    getMin() {
        return this.stack[this.stack.length - 1].min;
    };
};


module.exports = MinStack;