/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
    const answers = [];
    let target = head;
    while (target){
        let curr = target;
        let found = false;
        while (curr.next && !found){
            if(curr.next.val > target.val){
                found = true;
                answers.push(curr.next.val);
            }
            curr = curr.next;
        }
        if (!curr.next && !found) answers.push(0);

        target = target.next;
    }
    return answers;
};