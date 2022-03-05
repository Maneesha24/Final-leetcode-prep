/**
 * @author maneesha venigalla
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.
 * @param {TreeNode} root is the root of the binary tree
 * @return {number[]} is the inorder traversal of its nodes values
 */
 const inorderTraversal = (root) => {

    let result = [];

    const traverse = (node) => {
        if (!node) {
            return;
        }

        traverse(node.left);
        if (node) {
            result.push(node.val);
        }
        traverse(node.right);
    }

    traverse(root);
    return result;
}

module.exports = inorderTraversal;