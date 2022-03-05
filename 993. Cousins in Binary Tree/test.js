const isCousins = require('./index.js');
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

test('should pass all test conditions', () => {
  let root1 = new TreeNode(1);
  root1.left = new TreeNode(2);
  root1.right = new TreeNode(3);
  root1.left.left = new TreeNode(4);
  expect(isCousins(root1, 4, 3)).toBe(false);

  let root2 = new TreeNode(1);
  root2.left = new TreeNode(2);
  root2.right = new TreeNode(3);
  root2.left.right = new TreeNode(4);
  root2.right.right = new TreeNode(5);
  expect(isCousins(root2, 5, 4)).toBe(true);

  let root3 = new TreeNode(1);
  root3.left = new TreeNode(2);
  root3.right = new TreeNode(3);
  root3.left.right = new TreeNode(4);
  expect(isCousins(root3, 2, 3)).toBe(false);
});