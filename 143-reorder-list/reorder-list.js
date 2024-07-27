/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    //base case
    if (!head) return null;
    if (!head.next) return head;

    //recursive case
    let current = head;
    while(current.next.next){
        current = current.next; //get 2nd to last
    }
    let end = current.next;
    current.next = null; //break end off list
    let new3 = head.next;
    head.next = end;
    end.next = reorderList(new3);
    return head;

};