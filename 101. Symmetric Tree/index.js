/**
 * @author maneeshavenigalla
 * Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {

    if(!root) {
        return true;
    }


    const traverse = (p, q) => {
        if(!p && !q) {
            return true;
        }

        if(!p || !q || p.val != q.val) {
            return false;
        }

        return traverse(p.left, q.right) && traverse(p.right, q.left);
    }

    return traverse(root.left, root.right);

};

module.exports = isSymmetric;