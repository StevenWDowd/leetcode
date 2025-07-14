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
var swapPairs = function(head) {
    //1 index, switch on even indices while length remaining > 1
    //on odd len remaining, store node
    if (!head) return head;
    let curr = head;
    let len = 0;
    let nodes = [];
    while (curr){
        let temp = curr.next;
        curr.next = null;
        nodes.push(curr);
        len++;
        curr = temp;
    }

    const fullLen = len;
    let idx = 0;
    curr = nodes[idx];
    while (idx < nodes.length){
        if (idx % 2 !== 0){
            let temp = nodes[idx];
            nodes[idx] = nodes[idx - 1];
            nodes[idx-1] = temp;
        }
        idx++;
    }
    let newHead = nodes[0];
    curr = newHead;
    idx = 1;
    while (idx < nodes.length){
        curr.next = nodes[idx];
        curr = curr.next;
        idx++;
    }
    return newHead;
    // curr = head;
    // let stored = curr;
    // let newHead = curr;
    // while (len > 1){
    //     if (len % 2 === 0){
    //         let temp = curr.next;
    //         curr.next = null;
    //         stored.next = null;
    //         stored.next = temp;
    //         curr.next = stored;
    //         //curr = stored.next;
    //         //do we need a new head?
    //         if (len === fullLen) newHead = curr;
    //         curr = stored.next;
    //         len--;
    //     } else {
    //         //no switch here
    //         stored = curr;
    //         curr = curr.next;
    //         len--;
    //     }
    // }
    // console.log('newHead is: ', newHead);
    return newHead;



};