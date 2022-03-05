/**
 * Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all
 * the functions of a normal queue (push, peek, pop, and empty).
 */
 class MyQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    /**
     * Pushes element x to the back of the queue.
     * @param {number} x 
     * @return {void}
    */
    push(x) {
        while(this.stack1.length) {
            this.stack2.push(this.stack1.pop());
        }

        this.stack2.push(x);

        while(this.stack2.length) {
            this.stack1.push(this.stack2.pop());
        }
    };

    /** 
     * Removes the element from the front of the queue and returns it.
     * @return {number}
     */
    pop() {
        return this.stack1.pop();
    };

    /**
     * Returns the element at the front of the queue.
     * @return {number}
     */
    peek = function () {
        while(this.stack1.length) {
            this.stack2.push(this.stack1.pop());
        }

        let val = this.stack2[0];

        while(this.stack2.length) {
            this.stack1.push(this.stack2.pop());
        }

        return val;
    };

    /**
     * Returns true if the queue is empty, false otherwise.
     * @return {boolean}
     */
    empty = function () {
        return this.stack1.length == 0 ? true : false;
    };
};


module.exports = MyQueue;