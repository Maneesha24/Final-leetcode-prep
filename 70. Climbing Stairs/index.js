/**
 * @author maneeshavenigalla
 * You are climbing a staircase. It takes n steps to reach the top. Each time you can either
 * climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {

    let steps = [1, 1];
    
    for(let i = 2; i <= n; i++) {
        steps[i] = steps[i - 1] + steps[i - 2];
    }

    return steps[n];
};

module.exports = climbStairs;