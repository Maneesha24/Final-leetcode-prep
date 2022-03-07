/**
 * @author maneeshavenigalla
 * Given the root of a binary tree, invert the tree, and return its root.
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if(!root) {
        return null;
    }

    let queue = [root];

    while(queue.length) {
        let size = queue.length;
        
        for(let i = 0; i < size; i++) {
            let node = queue.shift();

            if(node.left && node.right) {
                let temp = node.left;
                node.left = node.right;
                node.right = temp;

                queue.push(node.left);
                queue.push(node.right);
            } else if (node.left) {
                node.right = node.left;
                node.left = null;

                queue.push(node.right);
            } else if (node.right) {
                node.left = node.right;
                node.right = null;

                queue.push(node.left);
            }
        }
    }

    return root;
};

var invertTree = (root) => {
    
    if (root) {
        let tmp = root.left;
        root.left = invertTree(root.right);
        root.right = invertTree(tmp);
    }
    return root;
}

module.exports = invertTree;