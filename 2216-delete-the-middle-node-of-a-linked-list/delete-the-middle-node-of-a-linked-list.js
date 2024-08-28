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
var deleteMiddle = function(head) {
    if (!head || !head.next) return null;
    //for even # of nodes, round up/take rightmost out
    //in 4-node list, remove the third
    let current = head;
    const nodes = [];
    while (current){
        let next = current.next;
        current.next = null;
        nodes.push(current);
        current = next;
    }
    const middle = Math.floor(nodes.length / 2);
    let newHead = nodes[0];
    let idx = 1;
    current = newHead;
    while (idx < nodes.length){
        let node = nodes[idx];
        if (idx !== middle){
            current.next = node;
            current = node;
        } else {
            //skip this one
        }
        idx++;
    }
    return newHead;

};