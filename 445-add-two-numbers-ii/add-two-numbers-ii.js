/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    //place values in stacks
    //pop off to add, track remainder, place result in node
    //when one stack is empty, add any remainder to next value of other stack
    const stack1 = [];
    const stack2 = [];
    let current = l1;
    while (current){
        stack1.push(current.val);
        current = current.next;
    }
    current = l2;
    while (current){
        stack2.push(current.val);
        current = current.next;
    }
    let remainder = 0;
    let newL;
    while (stack1.length && stack2.length){
        let first = stack1.pop();
        let second = stack2.pop();
        let sum = first + second;
        if (remainder > 0){
            sum = sum + remainder;
            remainder = 0;
        }
        if (sum > 9){
            remainder = 1;
            //can never be more than this
            sum = sum % 10;
        }
        let newNode = new ListNode(sum);
        if (!newL){
            newL = newNode;
        } else {
            newNode.next = newL;
            newL = newNode;
        }
    }
    //one stack runs out
    let remStack;
    if (stack1.length){
        remStack = stack1;
    } else {
        remStack = stack2;
    }

    while (remStack.length){
        let sum = remStack.pop();
        if (remainder > 0){
            sum = sum + remainder;
            remainder = 0;
        }
        if (sum > 9){
            remainder = 1;
            //can never be more than this
            sum = sum % 10;
        }
        let newNode = new ListNode(sum);
        if (!newL){
            newL = newNode;
        } else {
            newNode.next = newL;
            newL = newNode;
        }
    }

    //if we have any remainder
    if (remainder > 0){
        let newNode = new ListNode(remainder);
        remainder = 0;
        newNode.next = newL;
        newL = newNode;
    }

    return newL;

};