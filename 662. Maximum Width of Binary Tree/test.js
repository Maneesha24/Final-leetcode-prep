const widthOfBinaryTree = require('./index.js');
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

test('should pass all test conditions', () => {
    let root1 = new TreeNode(1);
    root1.left = new TreeNode(3);
    root1.right = new TreeNode(2);
    root1.left.left = new TreeNode(5);
    root1.left.right = new TreeNode(3);
    root1.right.right = new TreeNode(9);
    expect(widthOfBinaryTree(root1)).toBe(4);

    let root2 = new TreeNode(1);
    root2.left = new TreeNode(3);
    root2.left.left = new TreeNode(5);
    root2.left.right = new TreeNode(3);
    expect(widthOfBinaryTree(root2)).toBe(2);

    let root3 = new TreeNode(1);
    root3.left = new TreeNode(3);
    root3.right = new TreeNode(2);
    root3.left.left = new TreeNode(5);
    expect(widthOfBinaryTree(root3)).toBe(2);
});