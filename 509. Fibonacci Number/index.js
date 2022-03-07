/**
 * @author maneeshavenigalla
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,
 * such that each number is the sum of the two preceding ones, starting from 0 and 1. Given n, calculate F(n)
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    
    let result = [0, 1];
    
    for(let i = 2; i <= n; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }
    
    return result[n];
};

module.exports = fib;