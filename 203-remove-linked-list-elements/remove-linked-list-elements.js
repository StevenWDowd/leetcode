/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    // if (!head) return null;
    // if (head.next === null){
    //     return head.val === val ? null : head;
    // }

    // //recursive case
    // if (head.next.val === val){
    //     head.next = removeElements(head.next.next, val);
    //     return head;
    // } else {
    //     head.next = removeElements(head.next, val);
    //     return head;
    // }

    const nodes = [];
    let current = head;
    while (current){
        let next = current.next;
        current.next = null;
        if (current.val === val){
            //nothing
            console.log('val found, node skipped')
        } else {
            nodes.push(current);
            }
        current = next;
    }
    //console.log('nodes are: ', nodes);

    if (nodes.length === 0) return null;
    if (nodes.length === 1) return nodes[0];

    let newHead = nodes[0];
    current = newHead;
    for (let i = 1; i < nodes.length; i++){
        let newNode = nodes[i];
        current.next = newNode;
        current = newNode;
    }
    return newHead;
    
};