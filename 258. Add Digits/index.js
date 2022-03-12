/**
 * @author maneesha venigalla
 * Given an integer num, repeatedly add all its digits until
 * the result has only one digit, and return it.
 * @param {number} num
 * @return {number}
 */
 const addDigits = (num) => {

    num = num.toString().split('');

    while(num.length !== 1) {
        num = num.reduce((prev, curr) => (parseInt(prev) + parseInt(curr)), 0).toString().split('');
    }

    return num.map(val => parseInt(val))[0];
}

module.exports = addDigits;