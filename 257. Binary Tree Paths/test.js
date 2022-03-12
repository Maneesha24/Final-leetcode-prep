const binaryTreePaths = require('./index.js');
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

test('should pass the test cases', () => {
    let root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.right = new TreeNode(5);
    expect(binaryTreePaths(root)).toStrictEqual(["1->2->5","1->3"]);

    let root2 = new TreeNode(1);
    expect(binaryTreePaths(root2)).toStrictEqual(["1"]);
});