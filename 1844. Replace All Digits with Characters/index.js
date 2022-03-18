/**
 * @author maneeshavenigalla
 * You are given a 0-indexed string s that has lowercase English letters in its even indices and digits 
 * in its odd indices.Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will
 * never exceed 'z'.
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {

    let result = '';

    for(let i = 0; i < s.length; i++) {
        if(i%2 != 0) {
            result += String.fromCharCode(s[i - 1].charCodeAt(0) + parseInt(s[i]));
        } else {
            result += s[i];
        }
    }

    return result;
};

module.exports = replaceDigits;