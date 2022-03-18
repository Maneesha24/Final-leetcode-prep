/**
 * Given two strings s and t, return true if they are equal when both are typed into empty text 
 * editors. '#' means a backspace character. Note that after backspacing an empty text, the text will continue empty.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
   return removeBackspace(s) == removeBackspace(t); 
};

const removeBackspace = (str) => {
    let stack = [];

    for(const char of str) {
        if(char == '#') {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.join('');
}

module.exports = backspaceCompare;