/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head){
        return false;
    }
    let slowPoint = head;
    let fastPoint = head;
    let foundCycle = false;
    while (!foundCycle){
        slowPoint = slowPoint.next;
        fastPoint = fastPoint.next?.next;
        if (!slowPoint || !fastPoint){
            //if we ever go next to a nonexistent node, there is no cycle
            return false;
        }
        if (slowPoint === fastPoint){
            foundCycle = true;
        }
    }
    return true;
};