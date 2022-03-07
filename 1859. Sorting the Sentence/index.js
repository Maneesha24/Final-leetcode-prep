/**
 * @author maneeshavenigalla
 * A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each
 * word consists of lowercase and uppercase English letters. Given a shuffled sentence s containing no more 
 * than 9 words, reconstruct and return the original sentence.
 * @param {string} s
 * @return {string}
 */
 var sortSentence = function(s) {

    s = s.split(" ").sort((a, b) => a[a.length - 1] - b[b.length - 1]);

    return s.map(word => word.slice(0, -1)).join(" ");
};

module.exports = sortSentence;