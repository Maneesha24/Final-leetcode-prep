/**
 * @author maneeshavenigalla
 * Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise. A 
 * string is represented by an array if the array elements concatenated in order forms the string.
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
    return convertToObj(word1) == convertToObj(word2);
};

const convertToObj = (words) => {

    let result = '';
    words.map(word => result += word);
    return result;
}

module.exports = arrayStringsAreEqual;