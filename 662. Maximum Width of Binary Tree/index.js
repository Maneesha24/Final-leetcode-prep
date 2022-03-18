/**
 * @author maneeshavenigalla
 * Given the root of a binary tree, return the maximum width of the given tree. The maximum width of
 * a tree is the maximum width among all levels. The width of one level is defined as the length between
 * the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes 
 * are also counted into the length calculation.
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function (root) {

    let maxWidth = 0

    while (root.left && !root.right) {
        root = root.left
    }

    while (root.right && !root.left) {
        root = root.right
    }
    
    const queue = [{ node: root, pos: 0 }]

    while (queue.length) {
        let len = queue.length
        const positions = []

        while (len--) {
            const { node, pos } = queue.shift()
            
            positions.push(pos)
            
            if (node.left) {
                queue.push({ node: node.left,pos: 2 * pos })
            }
            
            if (node.right) {
                queue.push({ node: node.right, pos: 2 * pos + 1 })
            }
        }

        const levelWidth = positions[positions.length - 1] - positions[0] + 1

        maxWidth = Math.max(maxWidth, levelWidth)
    }
    
    return maxWidth
};

module.exports = widthOfBinaryTree;