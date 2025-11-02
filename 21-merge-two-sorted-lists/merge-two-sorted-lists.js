/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const nodes = [];
    let curr1 = list1;
    let curr2 = list2;
    while (curr1 && curr2){
        if (curr1.val === curr2.val){
            nodes.push(curr1);
            nodes.push(curr2);
            curr1 = curr1.next;
            curr2 = curr2.next;
        }
        else if (curr1.val > curr2.val){
            nodes.push(curr2);
            curr2 = curr2.next;
        }
        else if (curr2.val > curr1.val){
            nodes.push(curr1);
            curr1 = curr1.next;
        }
    }
    while (curr1){
        nodes.push(curr1);
        curr1 = curr1.next;
    }
    while (curr2){
        nodes.push(curr2);
        curr2 = curr2.next;
    }
    if (!nodes.length) return null;
    let newHead = nodes[0];
    //let curr = newHead;
    for (let i = 0; i < nodes.length; i++){
        if (i === nodes.length - 1){
            nodes[i].next = null;
        } else {
            nodes[i].next = nodes[i+1];
        }
    }
    return newHead;
    //base case
    // if (!list1 && !list2){
    //     return null;
    // }
    // if (!list1){
    //     return list2;
    // }
    // if (!list2){
    //     return list1;
    // }

    // //recursive case
    // let next1 = list1.next;
    // let next2 = list2.next;
    // if (!next1){
    //     //list1 out of vals
    // }
    // if (!next2){
    //     //list2 out of vals
    // }
    // if (list1.val < list2.val){
    //     list1.next = list2;
    //     list2.next = mergeTwoLists(next1, next2);
    //     return list1;
    // } else {
    //     list2.next = list1;
    //     list1.next = mergeTwoLists(next1, next2);
    //     return list2;
    // }
};