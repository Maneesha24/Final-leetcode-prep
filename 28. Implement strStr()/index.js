/**
 * @author maneeshavenigalla
 * Implement strStr(). Return the index of the first occurrence of needle in haystack, or -1 
 * if needle is not part of haystack.
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if(!needle.length) {
        return 0;
    }

    let i = 0;
    let length = needle.length;

    while(i + length <= haystack.length) {
        if(haystack.slice(i, i + length) == needle) {
            return i;
        }
        i++;
    }

    return -1;
};

module.exports = strStr;