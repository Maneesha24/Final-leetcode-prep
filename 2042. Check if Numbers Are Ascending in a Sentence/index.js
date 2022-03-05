/**
 * @author maneeshavenigalla
 * Given a string s representing a sentence, you need to check if all the numbers in s are strictly increasing from 
 * left to right (i.e., other than the last number, each number is strictly smaller than the number on its right in s). 
 * Return true if so, or false otherwise
 * @param {string} s
 * @return {boolean}
 */
 var areNumbersAscending = function(s) {
    
    let stack = [];

    s = s.split(" ");

    for(const char of s) {
        if(char[0].charCodeAt(0) >= 48 && char[0].charCodeAt(0) <= 57) {
            if(parseInt(char) <= stack[stack.length - 1]) {
                return false;
            }
            stack.push(parseInt(char));
        }
    }
    return true;
};

module.exports = areNumbersAscending;