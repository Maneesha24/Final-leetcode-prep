/**
 * @author maneesha venigalla
 * Given an integer n, return an array ans of length n + 1
 * such that for each i (0 <= i <= n), ans[i] is the number of 1's
 * in the binary representation of i.
 * @param {number} n is the input num 
 * @return {number[]} is the number of 1's in binary represenatation of i
 */
const countBits = (n) => {

    let result = [];

    for(let i = 0; i <= n; i++) {
        result.push(i.toString(2).replace(/0/g,"").length)
    }
    return result;
}

module.exports = countBits;