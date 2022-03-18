/**
 * @author maneeshavenigalla
 * Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path 
 * such that adding up all the values along the path equals targetSum. A leaf is a node with no children.
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = (node, target) => {
    if (!node) {
        return false;
    }
    
    if (!node.left && !node.right) {
        return target == node.val;
    } else {
        return hasPathSum(node.left, target - node.val) ||
            hasPathSum(node.right, target - node.val);
    }

};

module.exports = hasPathSum;