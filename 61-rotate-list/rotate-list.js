/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head) return null;
    //actual swaps is k % length of list
    let end = head;
    let lSize = 1;
    while (end.next){
        end = end.next;
        lSize++;
    }
    end.next = head;
    let numSwaps = k % lSize;
    let target = lSize - numSwaps - 1;

    while(target){
        head = head.next;
        target--;
    }
    let shiftHead = head.next;
    head.next = null;
    return shiftHead;

    // while (numSwaps > 0){
    //     //head = head.next;
    //     numSwaps--;
    // }


};