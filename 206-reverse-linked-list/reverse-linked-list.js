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
var reverseList = function(head) {
    if (!head || !head.next){
        return head;
    }
    const nodeStack = [];
    let current = head;
    while (current){
        let next = current.next;
        current.next = null;
        nodeStack.push(current);
        current = next;
    }

    newList = nodeStack.pop();
    current = newList;
    while (nodeStack.length > 0){
        let nextNode = nodeStack.pop();
        current.next = nextNode;
        current = nextNode;
    }
    return newList;
    
};