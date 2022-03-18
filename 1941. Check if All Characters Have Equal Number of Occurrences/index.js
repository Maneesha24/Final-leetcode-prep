/**
 * @author maneeshavenigalla
 * Given a string s, return true if s is a good string, or false otherwise. A string s is good if all the 
 * characters that appear in s have the same number of occurrences (i.e., the same frequency).
 * @param {string} s
 * @return {boolean}
 */
 var areOccurrencesEqual = function(s) {
    
    let charObj = {};

    for(const char of s) {
        if(char in charObj) {
            charObj[char] += 1
        } else {
            charObj[char] = 1
        }
    }

    return Object.values(charObj).every(val => val == charObj[s[0]])
};

module.exports = areOccurrencesEqual;