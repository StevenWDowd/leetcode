/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    let curr = node;
    let saved = node.next;
    curr.val = saved.val;
    curr.next = saved.next;
    saved.next = null;

};