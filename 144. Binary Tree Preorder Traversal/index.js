/**
 * @author maneesha venigalla
 * Given the root of a binary tree, return the preorder traversal of its nodes' values.
 * @param {TreeNode} root is the root of the binary tree
 * @return {number[]} is the preorder traversal of its nodes values
 */
 const preorderTraversal = (root) => {

    let result = [];

    const traverse = (node) => {
        if(!node) {
            return;
        }

        if(node) {
            result.push(node.val);
        }
        traverse(node.left);
        traverse(node.right);

    }

    traverse(root);
    return result;
}

module.exports = preorderTraversal;