/**
 * @author maneeshavenigalla
 * You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. 
 * The binary tree has the following definition: Populate each next pointer to point to its next right node. If there is no
 * next right node, the next pointer should be set to NULL. Initially, all next pointers are set to NULL.
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {

    if (!root) {
        return root;
    }

    let queue = [root];

    while (queue.length) {
        let level = [];
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            node.next = queue[0] || null;
            
            if (node.left) {
                level.push(node.left);
            }

            if (node.right) {
                level.push(node.right);
            }
        }
        queue = level;
    }

    return root;
};

module.exports = connect;