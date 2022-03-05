/**
 * @author maneesha venigalla
 * Given an integer x, return true if x is palindrome integer. 
 * An integer is a palindrome when it reads the same backward as
 * forward. For example, 121 is palindrome while 123 is not.
 * @param {number[]} x is the input number
 * @return {boolean} is true if the given num is a palindrome
 */
 const isPalindrome = (x) => {

    const str = JSON.stringify(x);
    let i = 0;

    while (i < str.length) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
        i++;
    }

    return true;
}

module.exports = isPalindrome;