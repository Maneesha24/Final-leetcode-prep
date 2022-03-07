/**
 * @author maneeshavenigalla
 * Given an integer array nums of unique elements, return all possible subsets (the power set). 
 * The solution set must not contain duplicate subsets. Return the solution in any order. 
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {

    let stack = [];

    for(const char of s) {
        if(char !== ']') {
            stack.push(char);
        } else {
            let subStrToAppend = '';
            while(stack[stack.length - 1] !== '[') {
                subStrToAppend = stack.pop() + subStrToAppend;
            }

            stack.pop();
            let times = stack.pop();
            stack.push(subStrToAppend.repeat(times));
        }
    }

    return stack.join('');
};

module.exports = decodeString;