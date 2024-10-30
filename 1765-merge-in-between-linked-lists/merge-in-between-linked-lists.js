/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let idx = 0;
    //mark nodes at a-1 and b+1
    let current = list1;
    let preA;
    let postB;
    while (current && !postB){
        if (idx === (a-1)) preA = current;
        if (idx === (b+1)) postB = current;
        idx++;
        current = current.next;
    }
    preA.next = list2;
    current = list2;
    while (current.next){
        current = current.next;
    }
    current.next = postB;
    return list1;
};