/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    const aMap = new Map();
    let currentA = headA;
    while (currentA){
        aMap.set(currentA, currentA);
        currentA = currentA.next;
    }
    let currentB = headB;
    while (currentB){
        if (aMap.has(currentB)) return currentB;
        currentB = currentB.next;
    }
    return null;
    
};