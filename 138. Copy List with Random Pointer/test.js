const copyRandomList = require('./index.js');
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

test('should pass all test conditions', () => {
    let node1 = new ListNode(7);
    let node2 = new ListNode(13);
    let node3 = new ListNode(11);
    let node4 = new ListNode(10);
    let node5 = new ListNode(1);

    node1.next = node2;
    node1.random = node2;

    node2.next = node3;
    node2.random = node3;

    node3.next = node4;
    node3.random = node4;

    node4.next = node5;
    node4.random = node5;

    node5.next = null;
    node5.random = null;
    expect(copyRandomList(node1)).toEqual({ "next": { "next": { "next": { "next": { "next": null, "random": null, "val": 1 }, "random": { "next": null, "random": null, "val": 1 }, "val": 10 }, "random": { "next": { "next": null, "random": null, "val": 1 }, "random": { "next": null, "random": null, "val": 1 }, "val": 10 }, "val": 11 }, "random": { "next": { "next": { "next": null, "random": null, "val": 1 }, "random": { "next": null, "random": null, "val": 1 }, "val": 10 }, "random": { "next": { "next": null, "random": null, "val": 1 }, "random": { "next": null, "random": null, "val": 1 }, "val": 10 }, "val": 11 }, "val": 13 }, "random": { "next": { "next": { "next": { "next": null, "random": null, "val": 1 }, "random": { "next": null, "random": null, "val": 1 }, "val": 10 }, "random": { "next": { "next": null, "random": null, "val": 1 }, "random": { "next": null, "random": null, "val": 1 }, "val": 10 }, "val": 11 }, "random": { "next": { "next": { "next": null, "random": null, "val": 1 }, "random": { "next": null, "random": null, "val": 1 }, "val": 10 }, "random": { "next": { "next": null, "random": null, "val": 1 }, "random": { "next": null, "random": null, "val": 1 }, "val": 10 }, "val": 11 }, "val": 13 }, "val": 7 });
});