/**
 * @author maneeshavenigalla
 * Given the root of a binary tree, return the average value of the nodes on each
 * level in the form of an array. Answers within 10-5 of the actual answer will be accepted.
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    let result = [];

    if(!root || root.val == undefined) {
        return result;
    }

    let queue = [root];

    while(queue.length) {
        let size = queue.length; 
        let level = [];

        for(let i = 0; i < size; i++) {
            let node = queue.shift();
            
            if(node.left) {
                queue.push(node.left);
            }

            if(node.right) {
                queue.push(node.right);
            }

            level.push(node.val);
        }

        let sum = 0;
        level.map(num => sum += num);
        result.push(sum/level.length);
    }

    return result;
};

module.exports = averageOfLevels;