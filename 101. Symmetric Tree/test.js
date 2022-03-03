const isSymmetric = require('./index.js');
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

test('should pass the test cases', () => {
    let root1 = new TreeNode(1);
    root1.left = new TreeNode(2);
    root1.right = new TreeNode(2);
    root1.left.left = new TreeNode(3);
    root1.left.right = new TreeNode(4);
    root1.right.left = new TreeNode(4);
    root1.right.right = new TreeNode(3);
    expect(isSymmetric(root1)).toBe(true);

    let root2 = new TreeNode(1);
    root2.left = new TreeNode(2);
    root2.right = new TreeNode(2);
    root2.left.right = new TreeNode(3);
    root2.right.right = new TreeNode(3);
    expect(isSymmetric(root2)).toBe(false);
});