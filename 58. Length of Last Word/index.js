/**
 * @author maneeshavenigalla
 * Given a string s consisting of some words separated by some number of spaces, return the length 
 * of the last word in the string. A word is a maximal substring consisting of non-space characters only.
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function (s) {
    
    return s.trim().replace(/\s+/g, ' ').split(' ').pop().length;
};

module.exports = lengthOfLastWord;