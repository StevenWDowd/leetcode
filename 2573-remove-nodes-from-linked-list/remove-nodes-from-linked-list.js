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
var removeNodes = function(head) {
    let current = head;
    let stack = [];
    while (current){
        let next = current.next;
        //current.next = null;
        stack.push(current);
        current = next;
    }

    let newHead = stack.pop();
    let highVal = newHead.val;
    while (stack.length > 0){
        let currNode = stack.pop();
        if (currNode.val >= highVal){
            highVal = currNode.val;
            currNode.next = newHead;
            newHead = currNode;
        } else {
            //disregard this node. do nothing, then
        }

    }

    return newHead;
};