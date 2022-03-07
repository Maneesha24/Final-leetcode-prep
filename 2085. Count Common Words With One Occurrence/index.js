/**
 * @author maneeshavenigalla
 * Given two string arrays words1 and words2, return the number of strings
 * that appear exactly once in each of the two arrays.
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
 var countWords = function(words1, words2) {
    
    let result = 0;

    let word1Obj = convertToObj(words1);
    let word2Obj = convertToObj(words2);

    for(const word in word1Obj) {
        if(word in word2Obj && word1Obj[word] == 1 && word2Obj[word] == 1) {
            result++;
        }
    }

    return result;
};

const convertToObj = (words) => {
    let wordObj = {};

    for(const word of words) {
        if(word in wordObj) {
            wordObj[word] += 1
        } else {
            wordObj[word] = 1;
        }
    }

    return wordObj;
}

module.exports = countWords;