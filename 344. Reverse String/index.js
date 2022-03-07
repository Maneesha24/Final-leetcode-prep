/**
 * @author maneesha venigalla
 * Write a function that reverses a string. The input string is given as an array of characters s. You 
 * must do this by modifying the input array in-place with O(1) extra memory.
 * @param {number} n is the input num 
 * @return {number[]} is the number of 1's in binary represenatation of i
 */
 var reverseString = function(s) {
  
    for(let i = 0; i < s.length/2; i++) {
        [s[i], s[s.length - i - 1]] = [s[s.length - i - 1], s[i]];
    }

    return s;
};

module.exports = reverseString;