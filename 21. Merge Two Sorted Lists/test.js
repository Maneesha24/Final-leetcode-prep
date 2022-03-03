const mergeTwoLists = require('./index.js');
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

test('should return pass all test conditions', () => {
    let list1 = new ListNode(1);
    list1.next = new ListNode(2);
    list1.next.next = new ListNode(4);

    let list2 = new ListNode(1);
    list2.next = new ListNode(3);
    list2.next.next = new ListNode(4);
    expect(mergeTwoLists(list1, list2)).toEqual({"next": {"next": {"next": {"next": {"next": {"next": null, "val": 4}, "val": 4}, "val": 3}, "val": 2}, "val": 1}, "val": 1});

    let list3 = new ListNode();
    let list4 = new ListNode();
    expect(mergeTwoLists(list3, list4)).toEqual({"next": {"next": null, "val": undefined}, "val": undefined});

    let list5 = new ListNode();
    let list6 = new ListNode(0);
    expect(mergeTwoLists(list5,list6)).toEqual({"next": {"next": null, "val": 0}, "val": undefined});
});