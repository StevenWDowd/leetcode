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
var oddEvenList = function(head) {
    if (!head) return head;
    let isOdd = false;
    const oddStack = [];
    const evenStack = [];
    let current = head;
    while (current){
        let next = current.next;
        current.next = null;
        if (isOdd){
            oddStack.push(current);
        } else {
            evenStack.push(current);
        }
        isOdd = !isOdd;
        current = next;
    }
    let newHead = evenStack[0];
    current = newHead;
    let idx = 1;
    while (idx < evenStack.length){
        let newNode = evenStack[idx];
        current.next = newNode;
        current = newNode;
        idx++;
    }
    idx = 0;
    while (idx < oddStack.length){
        let newNode = oddStack[idx];
        current.next = newNode;
        current = newNode;
        idx++;
    }
    return newHead;
};
