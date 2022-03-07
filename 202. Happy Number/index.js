/**
 * @author maneesha venigalla
 * Write an algorithm to determine if a number n is happy.
 * A happy number is a number defined by the following process:
 * Starting with any positive integer, replace the number by the sum of the squares of its digits.
 * Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
 * Those numbers for which this process ends in 1 are happy.
 * Return true if n is a happy number, and false if not.
 * @param {number}
 * @return {boolean}
 */
const isHappy = (n) => {

    if (n == 1 || n == 7) {
        return true;
    }
    if (n < 10) {
        return false;
    }

    while (n > 9) {

        let result = 0;
        let arr = JSON.stringify(n).split('');
        for (const val of arr) {
            result += val * val;
        }
        n = result;
    }

    return n == 1 || n == 7 ? true : false;
}

module.exports = isHappy;