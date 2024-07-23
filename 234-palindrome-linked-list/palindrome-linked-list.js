/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const valArr = [];
    let current = head;
    while (current){
        valArr.push(current.val);
        current = current.next;
    }
    if (valArr.length <= 1){
        return true;
    }
    let left = 0;
    let right = valArr.length - 1;
    while (left < right){
        if (valArr[left] !== valArr[right]) return false;
        left++;
        right--;
    }
    return true;
};