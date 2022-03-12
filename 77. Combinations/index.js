/**
 * Given two integers n and k, return all possible combinations of k numbers 
 * out of the range [1, n].
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
    
    let result = [];

    const backtrack = (comb, index) => {
        if(comb.length == k) {
            result.push([...comb]);
            return result;
        }

        for (let i = index; i <= n; i++) {
            comb.push(i);
            backtrack(comb, i + 1);
            comb.pop();
        }
    }

    backtrack([], 1);
    return result;
};

module.exports = combine;