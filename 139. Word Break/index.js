/**
 * @author maneeshavenigalla
 * Given a string s and a dictionary of strings wordDict, return true if s 
 * can be segmented into a space-separated sequence of one or more dictionary words.
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {

    let dictionary = new Set(wordDict);
    let dictLens = new Set(wordDict.map(word => word.length));

    let indexes = new Set([0]);

    for(const start of indexes) {
        for(const len of dictLens) {
            if(dictionary.has(s.slice(start, start + len))) {
                indexes.add(start + len);
            }
        }
    }

    return indexes.has(s.length);

};

module.exports = wordBreak;