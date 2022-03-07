/**
 * @author maneeshavenigalla
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing
 * x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 * @param {number} x
 * @return {number}
 */

 var reverse = function (x) {

    const number = Math.abs(x).toString().split('').reverse().join('');

    if (number > Math.pow(2, 31) - 1) {
        return 0
    }

    return x < 0 ? - 1 * parseInt(number) : parseInt(number);
};

module.exports = reverse;