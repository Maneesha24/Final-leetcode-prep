/**
 * @author maneeshavenigalla
 * Given the root of a binary tree, return the bottom-up level order traversal of its
 * nodes' values. (i.e., from left to right, level by level from leaf to root).
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    let result = [];

    if(!root || root.val == undefined) {
        return result;
    }

    let queue = [root];

    while(queue.length) {
        let size = queue.length; 
        let level = [];

        for(let i = 0; i < size; i++) {
            let node = queue.shift();
            
            if(node.left) {
                queue.push(node.left);
            }

            if(node.right) {
                queue.push(node.right);
            }

            level.push(node.val);
        }

        result.unshift(level);
    }

    return result;
};

module.exports = levelOrderBottom;