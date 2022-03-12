/**
 * @author maneesha venigalla
 * Given the root of a binary tree, return all root-to-leaf paths in any
 * order. A leaf is a node with no children.
 * @param {TreeNode} root
 * @return {string[]}
 */
 const binaryTreePaths = (root) => {
     
    if(!root) {
        return [];
    } else if (!root.left && !root.right) {
        return [`${root.val}`];
    } else {
        let left = binaryTreePaths(root.left).map(val => `${root.val}->${val}`);
        let right = binaryTreePaths(root.right).map(val => `${root.val}->${val}`);

        return [...left, ...right];
    }
}

module.exports = binaryTreePaths;