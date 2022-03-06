const searchBST = require('./index.js');
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

test('should pass all test conditions', () => {
  let root1 = new TreeNode(4);
  root1.left = new TreeNode(2);
  root1.right = new TreeNode(7);
  root1.left.left = new TreeNode(1);
  root1.left.right = new TreeNode(3);
  expect(searchBST(root1, 2)).toEqual({"left": {"left": null, "right": null, "val": 1}, "right": {"left": null, "right": null, "val": 3}, "val": 2});
  expect(searchBST(root1, 5)).toEqual(null);
});