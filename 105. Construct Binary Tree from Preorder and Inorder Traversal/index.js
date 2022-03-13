/**
 * @author maneeshavenigalla
 * Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary 
 * tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
var buildTree = function (preorder, inorder) {

    let inorderMap = {};
    inorder.forEach((val, i) => { inorderMap[val] = i });

    const build = (left, right) => {

        while (left > right) {
            return null;
        }

        let root = new TreeNode(preorder.shift());
        root.left = build(left, inorderMap[root.val] - 1);
        root.right = build(inorderMap[root.val] + 1, right);

        return root;
    }

    return build(0, inorder.length - 1);
};

module.exports = buildTree;