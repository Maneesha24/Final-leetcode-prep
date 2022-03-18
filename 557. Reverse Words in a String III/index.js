/**
 * @author maneeshavenigalla
 * Given a string s, reverse the order of characters in each word
 * within a sentence while still preserving whitespace and initial word order.
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    return s.split(' ').map(word => word.split('').reverse().join('')).join(' ');
};

module.exports = reverseWords;