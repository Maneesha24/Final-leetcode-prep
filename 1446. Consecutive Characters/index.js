/**
 * @author maneeshavenigalla
 * The power of the string is the maximum length of a non-empty substring that contains only one unique 
 * character. Given a string s, return the power of s.
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
    let stack = [];
    let max = 0;

    for (const char of s) {
        if (stack.length && stack[stack.length - 1][0] == char) {
            stack[stack.length - 1][1] += 1;
        } else {
            stack.push([char, 1]);
        }
    }

    stack.map(char => {
        max = Math.max(max, char[1])
    });

    return max;
};

module.exports = maxPower;