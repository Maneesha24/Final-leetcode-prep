/**
 * @author maneesha venigalla
 * Given an array of strings words and an integer k, return the k most frequent strings. Return
 * the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency
 * by their lexicographical order.
 * @param {string[]} words is the input array
 * @param {number} k is the number of frequent words
 * @return {string[]} is the output array consisting k most frequent strings
 */
 const topKFrequent = (words, k) => {

    let wordObj = {};

    for(const word of words) {
        if(word in wordObj) {
            wordObj[word] += 1
        } else {
            wordObj[word] = 1
        }
    }

    return Object.keys(wordObj).sort((a, b) => {
        if (wordObj[a] == wordObj[b]) {
            return a > b ? 1 : -1;
        }
         return wordObj[b] - wordObj[a];
    }).slice(0, k)

}

module.exports = topKFrequent;