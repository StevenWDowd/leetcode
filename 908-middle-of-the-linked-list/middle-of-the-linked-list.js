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
var middleNode = function(head) {
    //const nodeMap = new Map();
    //const idx = 0;
    let nodes = [];
    let curr = head;
    while (curr){
        nodes.push(curr);
        curr = curr.next;
    }
    let idx = Math.floor(nodes.length / 2);
    return nodes[idx];
};