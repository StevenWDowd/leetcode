/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    let nodes = [];
    if (!head) return head;
    let curr = head;
    while (curr){
        let next = curr.next;
        curr.next = null;
        nodes.push(curr);
        curr = next;
    }
    nodes.sort((a,b) => b.val - a.val);
    head = nodes.pop();
    curr = head;
    while (nodes.length){
        let node = nodes.pop();
        curr.next = node;
        curr = node;
    }
    return head;
};