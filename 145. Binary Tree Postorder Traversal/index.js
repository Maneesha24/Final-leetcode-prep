/**
 * @author maneesha venigalla
 * Given the root of a binary tree, return the preorder traversal of its nodes' values.
 * @param {TreeNode} root is the root of the binary tree
 * @return {number[]} is the postorder traversal of its nodes values
 */
const postorderTraversal = (root) => {

    let result = [];

    const traverse = (node) => {
        if(!node) {
            return;
        }

        traverse(node.left);
        traverse(node.right);
        if(node) {
            result.push(node.val);
        }
    }

    traverse(root);
    return result;
}

module.exports = postorderTraversal;