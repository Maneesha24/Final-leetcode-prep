/**
 * @author maneeshavenigalla
 * A pangram is a sentence where every letter of the English alphabet appears at least once. Given a string 
 * sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
    let alphabetSet = new Set(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);

    if(sentence.length < 26) {
        return false;
    }

    for(const char of sentence) {
        if(alphabetSet.has(char)) {
            alphabetSet.delete(char);
        }
    }

    return alphabetSet.size == 0 ? true : false;
};

module.exports = checkIfPangram;