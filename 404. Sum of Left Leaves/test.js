const sumOfLeftLeaves = require('./index.js');
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

test('should pass the test cases', () => {
    let tree1 = new TreeNode(3);
    tree1.left = new TreeNode(9);
    tree1.right = new TreeNode(20);
    tree1.right.left = new TreeNode(15);
    tree1.right.right = new TreeNode(7);
    expect(sumOfLeftLeaves(tree1)).toBe(24);

    let tree2 = new TreeNode(1);
    expect(sumOfLeftLeaves(tree2)).toBe(0);
});