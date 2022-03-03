/**
 * @author maneesha venigalla
 * Given a string s, find the length of the longest substring
 * without repeating characters.
 * @param {string} s is the input string
 * @return {boolean} is true if the given num is a palindrome
 */
const lengthOfLongestSubstring = (s) => {

    let left = 0;
    let right = 0;
    let maxLength = 0;
    let stringSet = new Set();

    while(right < s.length) {
        if(stringSet.has(s[right])) {
            stringSet.delete(s[left]);
            left++;
        } else {
            stringSet.add(s[right]);
            right++;
            maxLength = Math.max(maxLength, stringSet.size);
        }
    }

    return maxLength;
}

module.exports = lengthOfLongestSubstring;