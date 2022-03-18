/**
 * @author maneeshavenigalla
 * Given a 0-indexed string word and a character ch, reverse the segment of word that 
 * starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If
 * the character ch does not exist in word, do nothing. Return the resultant string
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
 var reversePrefix = function(word, ch) {
    let end = word.indexOf(ch);
    word = word.split('');
    if(end > -1) {
        word = word.slice(0, end + 1).reverse().concat(word.slice(end + 1));
    }
    return word.join('');
};

module.exports = reversePrefix;