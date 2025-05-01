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
var deleteDuplicates = function(head) {
    if (!head) return head;
    let numSet = new Set();
    let curr = head;
    let nodes = [];
    while (curr){
        let onDeck = curr.next;
        curr.next = null;
        if (!numSet.has(curr.val)){
            numSet.add(curr.val);
            nodes.push(curr);
        }
        curr = onDeck;
    }
    //nodes.sort((a,b) => b.val - a.val);
    let idx = 1;
    let newHead = nodes[0];
    curr = newHead;
    while(idx < nodes.length){ //while curr?
        curr.next = nodes[idx];
        idx++;
        curr = curr.next;
    }
    return newHead;
};