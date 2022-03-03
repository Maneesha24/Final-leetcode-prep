/**
 * @author maneeshavenigalla
 * Given a string s containing just the characters '(', ')', '{', '}',
 * '[' and ']', determine if the input string is valid.
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function (s) {

    const paranObj = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    if(s.length%2 != 0) {
        return false;
    }

    let stack = [];

    for(const char of s) {
        if(char in paranObj) {
            stack.push(char);
        } else if (paranObj[stack.pop()] != char) {
            return false;
        }

    }

    return stack.length ? false : true;
};


module.exports = isValid;