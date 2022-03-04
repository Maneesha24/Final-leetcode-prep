/**
 * @author maneeshavenigalla
 * You are given a string s and an integer k, a k duplicate removal consists of choosing k adjacent
 * and equal letters from s and removing them, causing the left and the right side of the deleted substring
 * to concatenate together. We repeatedly make k duplicate removals on s until we no longer can. Return the
 * final string after all such duplicate removals have been made. It is guaranteed that the answer is unique.
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

const removeDuplicates = (s, k) => {

    let stack = [];

    for(let i = 0; i < s.length; i++) {

        if(stack.length && s[i] == stack[stack.length - 1][0]) {
            stack[stack.length - 1][1] += 1;
            
            if(stack[stack.length - 1][1] == k) {
                stack.pop();
            }
        } else {
            stack.push([s[i], 1]);
        }
    }

    return stack.map(char => char[0].repeat(char[1])).join('');

};

module.exports = removeDuplicates;