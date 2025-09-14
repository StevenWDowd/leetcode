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
    let rem = 0;
    let curr1 = l1;
    let curr2 = l2;
    let newL = new ListNode();
    let curr3 = newL;
    while(curr1 && curr2){
        let sum = curr1.val + curr2.val + rem;
        rem = 0;
        if (sum > 9){
            sum = sum % 10;
            rem = 1;
        }
        curr3.val = sum;
        let next3 = new ListNode();
        curr3.next = next3;
        curr1 = curr1.next;
        curr2 = curr2.next;
        if (!curr1 || !curr2){
            //end of one list, get rid of dangling 0 node
            curr3.next = null;
        } else {
            curr3 = curr3.next;
        }
    }

    let extant = curr1 ? curr1 : curr2;
        while (extant){
        let next3 = new ListNode();
        let sum = rem + extant.val;
        rem = 0;
        if (sum > 9){
            sum = sum % 10;
            rem = 1;
        }
        extant = extant.next;
        next3.val = sum;
        curr3.next = next3;
        if (!extant && rem === 0 && sum === 0){
            curr3.next = null;
        } else {
            curr3 = curr3.next;
        }
        //handle last node being 0?
        // if (!extant && rem === 0){
        //     console.log("trimming. current ans is: ", newL);
        //     curr3.next = null;
        // }
        // curr3 = curr3.next
        }


    //handle any remainder
    if (rem){
        let next3 = new ListNode(1);
        curr3.next = next3;
        rem = 0;
    }
    return newL;
    // let diff = 0;
    // let curr1 = l1;
    // let curr2 = l2;
    // let oneLonger = true;
    // while (curr1 && curr2){
    //     curr1 = curr1.next;
    //     curr2 = curr2.next;
    // }
    // if (!curr1){
    //     oneLonger = false;
    // }
    // while (curr1){
    //     curr1 = curr1.next;
    //     diff++;
    // }

    // while (curr2){
    //     curr2 = curr2.next;
    //     diff++;
    // }
    // curr1 = l1;
    // curr2 = l2;
    // let newL = new ListNode();
    // let curr3 = newL;

    
    
};