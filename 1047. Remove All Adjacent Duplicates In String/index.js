/**
 * @author maneeshavenigalla
 * You are given a string s consisting of lowercase English letters. A duplicate removal consists of
 * choosing two adjacent and equal letters and removing them. Return the final string after all such duplicate
 * removals have been made. It can be proven that the answer is unique.
 * @param {string} s
 * @return {string}
 */

 const removeDuplicates = (s) => {

    let stack = [];
    let i = 0;

    while(i < s.length) {

        if(stack.length && s[i] == stack[stack.length - 1]) {
            stack.pop();
            i = i + 1;
        } else {
            stack.push(s[i]);
            i++;
        }
    }

    return stack.join('');

};

module.exports = removeDuplicates;