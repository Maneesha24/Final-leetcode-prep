/**
 * @author maneeshavenigalla
 * Given the root of a binary tree, return the leftmost value in the last row of the tree.
 * @param {TreeNode} root
 * @return {number}
 */
 var findBottomLeftValue = function(root) {
    if(!root) {
        return null;
    }

    let queue = [root];

    let result = 0;

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

        result = level[0];
    }

    return result;
};

module.exports = findBottomLeftValue;