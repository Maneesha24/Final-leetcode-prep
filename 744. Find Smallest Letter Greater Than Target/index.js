/**
 * @author maneeshavenigalla
 * Given a characters array letters that is sorted in non-decreasing order and a character 
 * target, return the smallest character in the array that is larger than target.
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
 var nextGreatestLetter = function(letters, target) {
    return letters.filter(x => x.charCodeAt(0) >= target.charCodeAt(0))[0] || letters[0]
};

module.exports = nextGreatestLetter;