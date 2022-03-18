const { serialize, deserialize } = require('./index.js');
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

test('should pass the test cases', () => {
    let tree1 = new TreeNode(2);
    tree1.left = new TreeNode(1);
    tree1.right = new TreeNode(3);
    expect(deserialize(serialize(tree1))).toEqual({"left": {"left": null, "right": null, "val": "1"}, "right": {"left": null, "right": null, "val": "3"}, "val": "2"});
});