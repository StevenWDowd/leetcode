/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    //special case for head?
    // const stack = [];
    // let current = head;
    // while (current){
    //     let next = current.next;
    //     current.next = null;
    //     stack.push(current);
    //     current = next;
    // }
    // let newHead;
    // let currNode;
    // while(stack.length){
    //     if (stack.length === n){
    //         //remove this node
    //         stack.pop();
    //     } else {
    //         let node = stack.pop();
    //         if (!newHead){
    //             newHead = node;
    //             currNode = newHead;
    //         } else {
    //             currNode.next = node;
    //             currNode = node;
    //         }
    //     }
    // }
    // if (!newHead) return null;
    // return newHead;

    let length = 0;
    let current = head;
    while (current){
        length++;
        current = current.next;
    }
    //got the total length
    //special case
    if (length === 1) return null;
    let newHead = head;
    
    //special case for head
    if (length === n){
        let replacer = newHead.next;
        newHead.next = null;
        newHead = replacer;
        length--;
    }
    current = newHead;
    while (current){
        length--;
        if (length === n){
            //need to skip next node;
            if (current.next){
            let twoDown = current.next.next;
            current.next = twoDown;
            current = current.next;
            } else {
                current.next = null;
                current = current.next;
            }
        } else {
            current = current.next;
        }
    }

    return newHead;
};