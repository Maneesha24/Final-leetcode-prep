/**
 * @author maneeshavenigalla
 * You are given two strings word1 and word2. Merge the strings by adding letters in alternating 
 * order, starting with word1. If a string is longer than the other, append the additional letters onto
 * the end of the merged string. Return the merged string.
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {

    word1 = word1.split('');
    word2 = word2.split('');

    let result = [];

    while(word1.length && word2.length) {
        result.push(word1.shift());
        result.push(word2.shift());
    }

    return [...result, ...word1, ...word2].join('');
};

module.exports = mergeAlternately;