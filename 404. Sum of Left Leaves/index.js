/**
 * @author maneeshavenigalla
 * Given the root of a binary tree, return the sum of all left leaves.
 * @param {TreeNode} root
 * @return {number}
 */
 var sumOfLeftLeaves = function(root) {
    
    let sum = 0;

    const traverse = (node, isleft) => {
        if(!node) {
            return 0;
        }

        if(isleft && !node.left && !node.right) {
            sum += node.val;
        }

        traverse(node.left, true);
        traverse(node.right, false);
    }

    traverse(root, false);
    return sum;
};

module.exports = sumOfLeftLeaves;