/**
 * @author maneeshavenigalla
 * Given an integer n, return the number of structurally unique BST's (binary search trees) which has
 * exactly n nodes of unique values from 1 to n.
 * @param {number} n
 * @return {number}
 */
 var numTrees = function(n) {

    const cache = {};

    const traverse = (n) => {

        if (n == 1) {
            return 1;
        }

        if(cache[n]) {
            return cache[n]
        }
        
        let totalTrees = 0;

        for (let root = 1; root <= n; root ++) {
            let leftTrees = 1

            if (root > 1)  {
                leftTrees = traverse(root - 1);
            }

            let rightTrees = 1

            if (root < n) {
                rightTrees = traverse(n - root);
            }
            
            totalTrees += leftTrees * rightTrees
        }

        cache[n] = totalTrees;
        return totalTrees
    };
    
    return traverse(n);
};

module.exports = numTrees;