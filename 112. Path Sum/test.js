const hasPathSum = require('./index.js');
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.next = null;
    }
}

test('should pass all test conditions', () => {
    let root = new TreeNode(5);
    root.left = new TreeNode(4);
    root.right = new TreeNode(8);
    root.left.left = new TreeNode(11);
    root.left.left.left = new TreeNode(7);
    root.left.left.right = new TreeNode(2);
    root.right.left = new TreeNode(13);
    root.right.right = new TreeNode(4);
    root.right.right.right = new TreeNode(1);
    expect(hasPathSum(root, 22)).toBe(true);

    let root2 = new TreeNode(1);
    root2.left = new TreeNode(2);
    root2.right = new TreeNode(3);
    expect(hasPathSum(root2, 5)).toBe(false);

    let root3 = new TreeNode();
    expect(hasPathSum(root3, 0)).toBe(false);
});