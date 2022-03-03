const preorderTraversal = require('./index.js');
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
  expect(preorderTraversal(root1)).toStrictEqual([1,null,2,3]);

  let root2 = new TreeNode(1);
  expect(preorderTraversal(root2)).toStrictEqual([1]);
});