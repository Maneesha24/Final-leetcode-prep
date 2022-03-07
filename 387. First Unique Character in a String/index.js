/**
 * @author maneeshavenigalla
 * Given a string s, find the first non-repeating character in it and 
 * return its index. If it does not exist, return -1.
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function (s) {

    let charObj = {};

    for(const char of s) {
        if(char in charObj) {
            charObj[char] += 1;
        } else {
            charObj[char] = 1;
        }
    }

    for(let i = 0; i < s.length; i++) {
        if(charObj[s[i]] == 1) {
            return i;
        }
    }

    return -1;
};

module.exports = firstUniqChar;