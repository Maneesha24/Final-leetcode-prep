/**
 * @author maneesha venigalla
 * Given two strings s and t, return true if t is an anagram of s,
 * and false otherwise.
 * @param {string} s is the first input string
 * @param {string} t is the second input string 
 * @return {boolean} is true if the first string is an anagram of the second string
 */
 const isAnagram = (s, t) => {

    if (s.length !== t.length) {
        return false;
    }
    const stringObj = convertToObj(s);

    for(const char of t) {
        if (!(char in stringObj) || stringObj[char] < 1) {
            return false;
        } else {
            stringObj[char] -= 1;
        }
    }

    return true;
}

const convertToObj = (str) => {
    let charObj = {};

    for(const char of str) {
        if (char in charObj) {
            charObj[char] += 1;
        } else {
            charObj[char] = 1;
        }
    }

    return charObj;
}

module.exports = isAnagram;