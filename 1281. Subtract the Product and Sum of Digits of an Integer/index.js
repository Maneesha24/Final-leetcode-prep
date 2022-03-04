/**
 * @author maneesha venigalla
 * Given an integer number n, return the difference between
 * the product of its digits and the sum of its digits.
 * @param {number} n is the input num 
 * @return {number} is the difference between the product and sum
 */
const subtractProductAndSum = (n) => {

    let prod = 1;
    let sum = 0;

    while(n) {
        indv = n%10;
        prod *= indv;
        sum += indv;
        n = Math.floor(n/10);
    }
    
    return prod - sum;
}

module.exports = subtractProductAndSum;