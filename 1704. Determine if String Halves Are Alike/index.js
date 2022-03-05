/**
 * @author maneeshavenigalla
 * You are given a string s of even length. Split this string into two halves of equal lengths, and 
 * let a be the first half and b be the second half. Two strings are alike if they have the same number
 * of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and 
 * lowercase letters. Return true if a and b are alike. Otherwise, return false.
 * @param {string} s
 * @return {boolean}
 */
 var halvesAreAlike = function(s) {
    return returnVowels(s.slice(0, s.length/2)) == returnVowels(s.slice(s.length/2));
};

const returnVowels = (str) => {
    const vowelSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

    let result = 0;

    for(const char of str) {
        if(vowelSet.has(char)) {
            result += 1;
        }
    }
    
    return result;
}

module.exports = halvesAreAlike;