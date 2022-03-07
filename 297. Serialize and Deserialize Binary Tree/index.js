/**
 * @author maneeshavenigalla
 * Serialization is the process of converting a data structure or object into a sequence of bits so that
 * it can be stored in a file or memory buffer, or transmitted across a network connection link to be 
 * reconstructed later in the same or another computer environment.
 * Encodes a tree to a single string.
 * @param {TreeNode} root
 * @return {string}
 */
 class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

 var serialize = function(root) {

    let string = '';

    const traverse = (node) => {
        if(!node) {
            string += `* `
        } else {
            string += `${node.val} `;
            traverse(node.left);
            traverse(node.right);
        }
    }

    traverse(root);
    return string;
};

/**
 * Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your 
 * serialization/deserialization algorithm should work. You just need to ensure that a binary tree can 
 * be serialized to a string and this string can be deserialized to the original tree structure.
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    
    let nodes = data.split(' ');

    const build = () => {
        let val = nodes.shift();

        if(val == '*') {
            return null;
        } else {
            let newNode = new TreeNode(val);
            newNode.left = build();
            newNode.right = build();
            return newNode;
        }
    }

    return build();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

module.exports = { serialize, deserialize };