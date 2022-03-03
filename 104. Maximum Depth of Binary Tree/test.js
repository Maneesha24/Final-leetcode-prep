const maxDepth = require('./index.js');
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

test('should pass all test conditions', () => {
  let root1 = new TreeNode(3);
  root1.left = new TreeNode(9);
  root1.right = new TreeNode(20);
  root1.right.left = new TreeNode(15);
  root1.right.right = new TreeNode(7);
  expect(maxDepth(root1)).toStrictEqual(3);
});