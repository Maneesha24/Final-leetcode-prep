/**
 * @author maneesha venigalla
 * Given the root of a binary tree, return the zigzag level order traversal of its nodes'
 * values. (i.e., from left to right, then right to left for the next level and alternate between).
 * @param {TreeNode} root is the root of the binary tree
 * @return {number[][]} is the zigzag level order traversal of its nodes' values
 */
 const zigzagLevelOrder = (root) => {

    let result = [];

    if (!root) {
        return [];
    }

    let queue = [];
    queue.push(root);

    while (queue.length) {
        let size = queue.length;
        let level = [];

        for (let i = 0; i < size; i++) {
            let node = queue.shift();

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }

            if (result.length % 2 == 0) {
                level.push(node.val)
            } else {
                level.unshift(node.val)
            }
        }

        result.push(level);
    }

    return result; 
}


module.exports = zigzagLevelOrder;