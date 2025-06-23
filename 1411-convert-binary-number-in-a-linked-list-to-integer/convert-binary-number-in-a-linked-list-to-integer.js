/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let len = -1;
    let curr = head;
    while (curr){
        len++;
        curr = curr.next;
    }
    let total = 0;
    curr = head;
    while (curr){
        if (curr.val === 1){
            total+= 2**len;
        }
        len--;
        curr = curr.next;
    }
    return total;
};