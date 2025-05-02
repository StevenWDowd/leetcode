/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    //map each node to a position
    //track the nodes just before and after the cutoff
    //sew em up
    const idxMap = new Map();
    let idx = 1;
    let curr = head;
    while (curr){
        idxMap.set(idx, curr);
        idx++;
        curr = curr.next;
    }
    //let counter = right;
    while (right > left){
        //ex, node 4 becomes 2
        let oldR = idxMap.get(right);
        let oldL = idxMap.get(left);
        idxMap.set(left, oldR);
        idxMap.set(right, oldL);
        right--;
        left++;
    }
    for (let i = 1; i < idx; i++){
        let node = idxMap.get(i);
        if (idxMap.has(i + 1)){
            node.next = idxMap.get(i + 1);
        } else {
            node.next = null;
        }
    }
    return idxMap.get(1);
};