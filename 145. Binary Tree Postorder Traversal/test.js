const postorderTraversal = require('./index.js');
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

test('should pass all test conditions', () => {
  let root1 = new TreeNode(1);
  root1.left = new TreeNode(null);
  root1.right = new TreeNode(2);
  root1.right.left = new TreeNode(3);
  expect(postorderTraversal(root1)).toStrictEqual([null, 3,2,1]);

  let root2 = new TreeNode(1);
  expect(postorderTraversal(root2)).toStrictEqual([1]);

  let root3 = new TreeNode(1);
  root3.left = new TreeNode(2);
  expect(postorderTraversal(root3)).toStrictEqual([2,1]);

  let root4 = new TreeNode(1);
  root4.right = new TreeNode(2);
  expect(postorderTraversal(root4)).toStrictEqual([2,1]);
});