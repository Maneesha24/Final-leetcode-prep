/**
 * @author maneeshavenigalla
 * Given the root of a binary tree with unique values and the values of two different nodes of the tree x 
 * and y, return true if the nodes corresponding to the values x and y in the tree are cousins, or false
 * otherwise. Two nodes of a binary tree are cousins if they have the same depth with different parents. Note 
 * that in a binary tree, the root node is at the depth 0, and children of each depth k node are at the depth k + 1.
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {

    if (!root) {
        return false;
    }

    let queue = [root];

    while (queue.length) {
        let size = queue.length;
        let foundA = false;
        let foundB = false;

        for (let i = 0; i < size; i++) {
            let node = queue.shift();

            if (node.left && node.right) {
                if ((node.left.val == x && node.right.val == y) || (node.left.val == y && node.right.val == x)) {
                    return false;
                }
            }

            if (node.val === x) {
                foundA = true;
            }
            if (node.val === y){
                foundB = true;
            }

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

        if (foundA && foundB) {
            return true;
        }
    }

    return false;
};

module.exports = isCousins;