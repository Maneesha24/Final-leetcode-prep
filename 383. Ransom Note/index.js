/**
 * @author maneeshavenigalla
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed from magazine 
 * and false otherwise. Each letter in magazine can only be used once in ransomNote.
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {

    if (magazine.length < ransomNote.length) {
        return false;
    }

    let magazineObj = convertToObj(magazine);
    for(const char of ransomNote) {
        if(!(char in magazineObj) || magazineObj[char] < 1) {
            return false;
        } else {
            magazineObj[char] -= 1;
        }
    }

    return true;
};

const convertToObj = (str) => {

    let charObj = {};

    for(const char of str) {
        if(char in charObj) {
            charObj[char] += 1
        } else {
            charObj[char] = 1
        }
    }

    return charObj;
}

module.exports = canConstruct;