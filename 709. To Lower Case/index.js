/**
 * @author maneeshavenigalla
 * Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.
 * @param {string} s
 * @return {string}
 */
 var toLowerCase = function(s) {
    
    for(let i = 0; i < s.length; i++) {
        if(s[i].charCodeAt(0) >= 65 && s[i].charCodeAt(0) <= 90) {
            s = `${s.slice(0, i)}${String.fromCharCode(s[i].charCodeAt(0) + 32)}${s.slice(i + 1)}`
        }
    }

    return s;
};

module.exports = toLowerCase;