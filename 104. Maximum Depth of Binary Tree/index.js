/**
 * @author maneesha venigalla
 * Given the root of a binary tree, return its maximum depth. A binary tree's
 * maximum depth is the number of nodes along the longest path from the
 * root node down to the farthest leaf node.
 * @param {TreeNode} root is the root of the binary tree
 * @return {number} is the maximum depth of the binary tree
 */
const maxDepth = (root) => {
    let result = 0;

    if (!root || root.val == undefined) {
        return result;
    }

    let queue = [root];

    while (queue.length) {
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let node = queue.shift();

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }
        result++;
    }

    return result;
}

module.exports = maxDepth;