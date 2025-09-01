/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    const oldNewMap = new Map();
    let curr = head;
    //when building new list, look up curr.next in map for next val. ditto for random
    while (curr){
        let neo = new _Node();
        neo.val = curr.val;
        oldNewMap.set(curr, neo);
        curr = curr.next;
    }
    curr = head;
    let newHead = oldNewMap.get(head);
    let newCurr = newHead;
    while(curr){
        if(curr.next){
            newCurr.next = oldNewMap.get(curr.next);
        } else {
            newCurr.next = null;
        }
        if (curr.random){
            newCurr.random = oldNewMap.get(curr.random);
        } else {
            newCurr.random = null;
        }
        curr = curr.next;
        newCurr = newCurr.next;
    }
    return newHead;
};