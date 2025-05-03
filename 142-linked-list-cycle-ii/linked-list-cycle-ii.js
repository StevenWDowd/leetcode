/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let curr = head;
    const idxMap = new Map();
    let idx = 0;
    //map node:idx pairs? node should only appear once
    while (curr){
        if (idxMap.has(curr)){
            //return idxMap.get(curr);
            return curr;
        } else {
            idxMap.set(curr, idx);
        }
        idx++;
        curr = curr.next;
    }
    return null;
};