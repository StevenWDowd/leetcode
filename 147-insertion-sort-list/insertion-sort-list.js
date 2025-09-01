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
var insertionSortList = function(head) {
    const nodes = [];
    let curr = head;
    while (curr){
        let next = curr.next;
        curr.next = null;
        nodes.push(curr);
        curr = next;
    }
    console.log("nodes is: ", nodes);

        for (let i = 0; i < nodes.length; i++){
            let node = nodes[i];
            let comp = i - 1;
            console.log('comp is: ', comp);
            while (nodes[comp]?.val > node.val && comp > -1){
                //swap
                nodes[comp + 1] = nodes[comp];
                comp--; 
            }
            nodes[comp+1] = node;
        }
        console.log('nodes is now: ', nodes);
    let neoHead = nodes[0];
    curr = neoHead;
    let idx = 1;
    while (idx < nodes.length){
        curr.next = nodes[idx];
        idx++;
        curr = curr.next;
    }
    return neoHead;
};